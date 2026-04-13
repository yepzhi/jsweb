// ⚠️  This file runs CLIENT-SIDE. Do NOT import GoogleGenerativeAI directly here —
// that would expose the API key in the browser bundle.
// All Gemini calls go through /api/tutor (server-side route) via fetch.

type GeminiHistory = { role: 'user' | 'model'; parts: [{ text: string }] }[];

async function callTutorAPI(
  message: string,
  history: GeminiHistory,
  topic: string,
  level: string,
  step: string,
): Promise<string> {
  const res = await fetch('/api/tutor', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message, history, topic, level, step }),
  });
  if (!res.ok) throw new Error(`Tutor API error: ${res.status}`);
  const data = await res.json();
  return data.text || 'Interesante. ¿Puedes contarme más?';
}

const SYSTEM_PROMPT = `Eres StemBot, el tutor personal de JóvenesSTEM, creado por Alberto Yépiz.

MISIÓN:
Guiar a estudiantes mexicanos de 6-18 años a través del conocimiento STEM usando el método socrático. 
Tu objetivo NO es dar respuestas directo — es hacer que el alumno las descubra por sí mismo.

PERSONALIDAD:
- Entusiasta y curioso, como un científico joven
- Paciente — nunca te frustras con errores
- Celebras cada descubrimiento genuinamente
- Usas analogías con tecnología que los jóvenes conocen: videojuegos, YouTube, TikTok, celulares, Minecraft, etc.
- Hablas en español mexicano natural

MÉTODO SOCRÁTICO — TU REGLA DE ORO:
NUNCA des la respuesta directamente.
Siempre guía con preguntas hacia el descubrimiento.

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

Responde siempre en español mexicano, breve y conversacional.`;

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export class StemBot {
  private conversationHistory: ChatMessage[] = [];
  private studentAge: number = 15;
  private currentTopic: string = '';

  constructor(age: number = 15, topic: string = '') {
    this.studentAge = age;
    this.currentTopic = topic;
  }

  setContext(age: number, topic: string) {
    this.studentAge = age;
    this.currentTopic = topic;
    this.conversationHistory = [];
  }

  private getAgeAdjustedPrompt(): string {
    let ageContext = '';
    if (this.studentAge <= 10) {
      ageContext = ' Usa lenguaje muy simple y analogías con juegos o cuentos que entienda un niño.';
    } else if (this.studentAge <= 14) {
      ageContext = ' Usa lenguaje accesible y analogías con tecnología y cultura pop que conozcen.';
    } else {
      ageContext = ' Puedes usar términos técnicos, pero siempre con explicación clara.';
    }
    return SYSTEM_PROMPT + ageContext;
  }

  async chat(userMessage: string): Promise<string> {
    this.conversationHistory.push({ role: 'user', content: userMessage });

    // Build Gemini-format history (excluding the current message)
    const history: GeminiHistory = this.conversationHistory.slice(0, -1).map((msg) => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }],
    }));

    const levelLabel =
      this.studentAge <= 10 ? '6-10 años' :
      this.studentAge <= 14 ? '11-14 años' : '15-18 años';

    try {
      const assistantMessage = await callTutorAPI(
        userMessage,
        history,
        this.currentTopic,
        levelLabel,
        'socratic',
      );

      this.conversationHistory.push({
        role: 'assistant',
        content: assistantMessage,
      });

      return assistantMessage;
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      throw error;
    }
  }

  getHistory(): ChatMessage[] {
    return this.conversationHistory;
  }

  clearHistory() {
    this.conversationHistory = [];
  }

  // Detect key concepts in user's response
  detectConcepts(response: string): string[] {
    const concepts: { [key: string]: string[] } = {
      'universo': ['universo', 'cosmos', 'big bang', 'galaxia', 'estrella'],
      'átomo': ['átomo', 'núcleo', 'electrón', 'protón', 'neutrón'],
      'molécula': ['molécula', 'enlace', 'química', 'compuesto'],
      'energía': ['energía', 'fuerza', 'potencia', 'cinética', 'potencial'],
      'luz': ['luz', 'onda', 'fotón', 'rayo', 'espectro'],
      'tecnología': ['tecnología', 'dispositivo', 'máquina', 'circuito', 'software'],
      'programación': ['programa', 'código', 'algoritmo', 'función', 'variable'],
      'internet': ['internet', 'wifi', 'red', 'datos', 'servidor'],
    };

    const lowercaseResponse = response.toLowerCase();
    const detected: Set<string> = new Set();

    for (const [concept, keywords] of Object.entries(concepts)) {
      for (const keyword of keywords) {
        if (lowercaseResponse.includes(keyword)) {
          detected.add(concept);
        }
      }
    }

    return Array.from(detected);
  }
}

export async function callGeminiAPI(
  messages: ChatMessage[],
  systemPrompt: string
): Promise<string> {
  try {
    const response = await model.generateContent({
      contents: messages.map((msg) => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }],
      })),
    });

    return response.response.text();
  } catch (error) {
    console.error('Error calling Gemini:', error);
    throw error;
  }
}
