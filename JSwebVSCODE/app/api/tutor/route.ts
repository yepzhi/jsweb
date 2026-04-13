/**
 * /api/tutor — StemBot AI Endpoint
 *
 * Proxies requests to Google Gemini (gemini-2.0-flash) SERVER-SIDE.
 * The GEMINI_API_KEY is NEVER exposed to the client.
 *
 * POST body: { message: string, history?: ChatMessage[], topic?: string, level?: string, step?: string }
 * Response:  { text: string }
 */

import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

// ── StemBot System Prompt (from instructionset.md §8) ─────────────────────────
const SYSTEM_PROMPT = `
Eres StemBot, el tutor personal de JóvenesSTEM, creado por Alberto Yépiz.

MISIÓN:
Guiar a estudiantes mexicanos de 6-18 años a través del conocimiento
STEM del BlueBook v1 usando el método socrático. Tu objetivo no es
dar respuestas — es hacer que el alumno las descubra.

PERSONALIDAD:
- Entusiasta y curioso, como un científico joven
- Paciente — nunca te frustras con errores
- Celebras cada descubrimiento genuinamente
- Usas analogías con tecnología que los jóvenes conocen: videojuegos, YouTube, TikTok, celulares, Minecraft, etc.
- Hablas en español mexicano natural

MÉTODO SOCRÁTICO — TU REGLA DE ORO:
NUNCA des la respuesta directamente.
Siempre guía con preguntas hacia el descubrimiento.

INCORRECTO: "El ADN es la molécula que contiene las instrucciones..."
CORRECTO:   "Piensa en el ADN como el código de un videojuego. ¿Qué crees que pasaría si ese código tuviera un error?"

ESTRUCTURA DE RESPUESTA:
1. Reconoce lo que dijo el alumno (1 oración breve)
2. Haz UNA pregunta para profundizar o guiar
3. Máximo 2-3 oraciones totales (es conversación, no clase)

CUANDO EL ALUMNO SE EQUIVOCA:
Nunca digas "incorrecto" o "eso está mal".
Di: "Interesante perspectiva. ¿Qué pasaría si lo pensamos desde...?"

CELEBRACIÓN AL LLEGAR A LA RESPUESTA:
"¡Eso es exactamente! ¿Ves cómo llegaste tú solo? 🚀"
"¡Perfecto! Acabas de descubrir algo que los científicos tardaron años en entender. 🌟"
`.trim();

type Role = 'user' | 'model';

interface ChatMessage {
  role: Role;
  parts: [{ text: string }];
}

// ── Validate origin/authentication (basic) ────────────────────────────────────
function isValidRequest(req: NextRequest): boolean {
  // In production: check Supabase session token from Authorization header
  // For MVP: allow all requests
  return true;
}

export async function POST(req: NextRequest) {
  // ── Auth check ────────────────────────────────────────────────────────────
  if (!isValidRequest(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // ── API Key check (server-side only, never exposed to client) ────────────
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error('[StemBot] GEMINI_API_KEY not configured in environment');
    return NextResponse.json(
      { error: 'AI service not configured. Contact administrator.' },
      { status: 503 }
    );
  }

  try {
    const body = await req.json();
    const {
      message,
      history = [],
      topic = 'STEM general',
      level = '11-14 años',
      step = 'socratic',
    }: {
      message: string;
      history?: ChatMessage[];
      topic?: string;
      level?: string;
      step?: string;
    } = body;

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    // ── Initialize Gemini client ───────────────────────────────────────────
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: 'gemini-2.0-flash',
      systemInstruction: `${SYSTEM_PROMPT}\n\nTEMA ACTUAL: ${topic}\nNIVEL DEL ALUMNO: ${level}\nPASO ACTUAL: ${step}`,
    });

    // ── Start chat with history ────────────────────────────────────────────
    const chat = model.startChat({
      history: history.map((msg) => ({
        role: msg.role,
        parts: msg.parts,
      })),
      generationConfig: {
        maxOutputTokens: 300, // Keep responses conversational and brief
        temperature: 0.85,    // Slightly creative for engaging responses
      },
    });

    const result = await chat.sendMessage(message.trim());
    const responseText = result.response.text();

    return NextResponse.json({ text: responseText });
  } catch (error: unknown) {
    console.error('[StemBot] Gemini API error:', error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: 'StemBot no está disponible en este momento. Intenta de nuevo.' },
      { status: 500 }
    );
  }
}

// ── Rate limiting note ─────────────────────────────────────────────────────────
// For production, add rate limiting via Vercel KV or Upstash Redis.
// Gemini 2.0 Flash free tier: 15 req/min, 1500 req/day.
// Consider adding per-user limits once Supabase auth is implemented.
