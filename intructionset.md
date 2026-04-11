# JóvenesSTEM® — Web AI Platform
## Especificación Completa v2.0
### Metodología + Arquitectura Técnica + UI Spec para Banani

> **Proyecto:** JóvenesSTEM Web AI Platform
> **Autor:** Alberto Yépiz | yepzhi.com
> **Última actualización:** Abril 2026
> **Estado:** En desarrollo — MVP Fase 1

---

# ÍNDICE

1. [Visión del Producto](#1-visión-del-producto)
2. [Metodologías Pedagógicas](#2-metodologías-pedagógicas)
3. [Flujo Completo de un Módulo](#3-flujo-completo-de-un-módulo)
4. [Arquitectura Técnica — Backend Local](#4-arquitectura-técnica--backend-local)
5. [Escalabilidad — De 1 a 50+ Alumnos](#5-escalabilidad--de-1-a-50-alumnos)
6. [Setup 24/7 y Performance](#6-setup-247-y-performance)
7. [🎨 UI SPEC PARA BANANI](#7--ui-spec-para-banani)
8. [System Prompt — StemBot](#8-system-prompt--stembot)
9. [Roadmap de Implementación](#9-roadmap-de-implementación)
10. [Diferenciación vs. Competencia](#10-diferenciación-vs-competencia)

---

# 1. Visión del Producto

Transformar JóvenesSTEM de un programa presencial a una **plataforma web de aprendizaje adaptativo con tutor IA por voz**, donde cada alumno avanza de forma independiente con retroalimentación inteligente en tiempo real.

### Propuesta de valor central
> Un tutor personal de IA disponible 24/7, en español, que usa el método socrático para guiar a jóvenes de 6-18 años a través del conocimiento STEM del BlueBook v1 — sin que el alumno sienta que está haciendo un curso en línea tradicional.

### Lo que hace único este producto
- Tutor IA con **voz** — no solo texto, conversación real
- Método **socrático** — la IA pregunta, no da respuestas directas
- **Adaptación automática** al ritmo de cada alumno
- **Privacidad total** — todo el procesamiento ocurre localmente
- Costo de operación ~$87 MXN/mes de luz (backend en casa)
- Alineado a **NGSS + RENAC + BlueBook v1**
- Precio accesible: $19-39 MXN por alumno

### Usuarios objetivo
| Segmento | Edad | Contexto |
|----------|------|----------|
| Primaria alta | 10-12 años | Escuela pública/privada |
| Secundaria | 12-15 años | Modalidad curricular o extracurricular |
| Preparatoria | 15-18 años | Fast Track o curricular |
| Adultos interesados | 18+ | Autodidacta |

---

# 2. Metodologías Pedagógicas

> JóvenesSTEM presencial ya usa: ABP Colaborativo + Problem Solving.
> La versión web adapta estas metodologías y añade 5 capas nuevas habilitadas por IA.

---

## 2.1 Retrieval Practice + Feedback Adaptativo *(Core)*
**Base científica:** Roediger & Karpicke (2006) — mayor retención vs. relectura pasiva.

Después de cada bloque de contenido, la IA hace preguntas orales sobre lo aprendido. No es un quiz — es una conversación natural.

```
Alumno lee/ve contenido →
IA pregunta por voz: "Cuéntame con tus palabras qué entendiste" →
Alumno responde hablando →
IA identifica conceptos presentes y ausentes →
IA da feedback específico y contextual →
IA decide si el alumno puede avanzar o necesita refuerzo
```

---

## 2.2 Método Socrático con IA *(Diferenciador principal)*
**Base:** Método Socrático + Zona de Desarrollo Próximo (Vygotsky).

La IA **nunca da la respuesta directa**. Hace preguntas para guiar al alumno a descubrirla él mismo.

**Ejemplo — Módulo ADN y Genética:**
```
IA:     "¿Qué crees que pasaría si una célula copiara mal su ADN?"
Alumno: "Que saldría mal la célula..."
IA:     "Interesante. ¿Puedes pensar en alguna enfermedad donde eso ocurra?"
Alumno: "¿El cáncer?"
IA:     "¡Exacto! ¿Y por qué crees que el cáncer crece sin control?"
→ Alumno llega solo al concepto de mutación genética
→ IA: "¡Eso es exactamente! ¿Ves cómo llegaste tú solo? 🚀"
```

**Regla de oro del sistema:** Si la IA da la respuesta directa → falla de diseño.

---

## 2.3 Learning by Teaching *(Efecto Protégé)*
**Base:** Investigación Carnegie Mellon — retención hasta 90% al enseñar vs. 10% leyendo.

Al terminar cada módulo, el alumno le **explica el concepto a la IA** como si enseñara a alguien más.

```
IA:     "Ahora explícame tú qué es un transistor,
         como si yo tuviera 10 años"
Alumno: [graba respuesta por voz ~30-60 seg]
IA:     analiza si los conceptos clave están presentes
IA:     "Muy bien, mencionaste X e Y.
         Te faltó mencionar Z. ¿Puedes intentarlo de nuevo?"
```

---

## 2.4 Spaced Repetition Inteligente
**Base:** Algoritmo SM-2 (Ebbinghaus + Supermemo). El mismo algoritmo de Anki/Duolingo.

El sistema agenda repasos automáticamente antes de que el alumno olvide el concepto.

```
Día 1:   Cosmos y Átomos → aprendido ✅
Día 4:   Notificación: "¿Recuerdas qué es un quark?" → 2 min repaso oral
Día 11:  Refuerzo rápido por voz
Día 30:  Verificación final → candidato a certificación
```

**Intervalos:** 1d → 3d → 7d → 21d → 60d (ajusta según rendimiento del alumno)

---

## 2.5 Micro-proyectos Incrementales *(ABP adaptado a web)*
Evolución del ABP presencial al formato asincrónico individual.

| Capítulo | Micro-proyecto | Análisis IA |
|----------|---------------|-------------|
| Cosmos y Átomos | Graba 60 seg explicando el Big Bang a tu familia | Audio → análisis de conceptos |
| ADN y Genética | Dibuja la doble hélice y explica sus partes | Foto → visión IA |
| Procesadores | Diseña en papel el flujo de un algoritmo | Foto → análisis de diagrama |
| IA + ML | Describe cómo aprende una IA con tus palabras | Voz → comprensión |

---

## 2.6 Gamification con Narrativa Continua
No badges vacíos — una identidad que evoluciona con el programa.

```
Capítulo 1 — Nuestra Ciencia:       🌌  "Explorador del Cosmos"
Capítulo 2 — Nuestra Tecnología:    ⚙️  "Ingeniero del Silicio"
Capítulo 3 — Programación + IA:     💻  "Arquitecto Digital"
Al completar certificación:         🏆  "JóvenesSTEM Certified"
```

Cada concepto dominado desbloquea una parte del **Mapa STEM** — una visualización del universo del conocimiento científico-tecnológico que el alumno va "iluminando".

---

## 2.7 Adaptive Learning Path
La IA detecta gaps y ajusta el camino automáticamente.

```
Si alumno tiene dificultades en Programación:
  → Más ejemplos, más preguntas de refuerzo
  → Más tiempo antes de avanzar al siguiente módulo
  → StemBot usa analogías más simples

Si alumno avanza rápido en Física:
  → Desbloquea contenido bonus/avanzado
  → Preguntas de mayor complejidad
  → Ruta acelerada
```

---

# 3. Flujo Completo de un Módulo

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MÓDULO EJEMPLO: "ADN y Genética"
Tiempo estimado: 18-22 minutos | 100% asincrónico
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PASO 1 — CONTENIDO [5 min]
  ├── Video corto 2-3 min (embedded YouTube o video propio)
  ├── Extracto del BlueBook v1 (texto + imágenes)
  └── Highlights automáticos de conceptos clave

PASO 2 — RETRIEVAL POR VOZ [3 min]
  ├── StemBot: "Antes de continuar, cuéntame qué entendiste"
  ├── Alumno habla libremente (Web Speech API)
  └── IA identifica conceptos presentes/ausentes en la respuesta

PASO 3 — SESIÓN SOCRÁTICA [5 min]
  ├── StemBot hace 2-3 preguntas guiadas según el retrieval
  ├── Alumno responde por voz o texto
  └── StemBot NUNCA da la respuesta — solo guía

PASO 4 — TEACH-BACK [3 min]
  ├── "Explícame el ADN como si yo tuviera 10 años"
  ├── Alumno graba explicación por voz
  └── IA analiza claridad y completitud → feedback

PASO 5 — MICRO-RETO [3 min]
  ├── Actividad práctica breve (foto, dibujo, audio)
  └── IA analiza con visión o audio según el tipo

PASO 6 — SPACED REP [automático, background]
  ├── Sistema registra conceptos dominados
  └── Agenda repaso en N días según rendimiento

PASO 7 — NARRATIVA [inmediato]
  ├── Desbloquea parte del Mapa STEM
  ├── Muestra badge de progreso
  └── Preview del siguiente módulo para enganchar

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

# 4. Arquitectura Técnica — Backend Local

## 4.1 Stack completo

```
┌─────────────────────────────────────────────────┐
│              FRONTEND (Web App)                 │
│   Next.js 14 + React + Tailwind CSS             │
│   Web Speech API (voz entrada — nativa, gratis) │
│   PWA — funciona como app en celular            │
│   Desplegado en Vercel o Cloudflare Pages       │
└──────────────────────┬──────────────────────────┘
                       │ HTTPS via Cloudflare Tunnel
┌──────────────────────▼──────────────────────────┐
│          BACKEND LOCAL (Mac Mini 24/7)          │
│                                                 │
│  ┌──────────────┐    ┌───────────────────────┐  │
│  │    Ollama    │    │      Piper TTS        │  │
│  │  Gemma E4B   │    │   Voz española local  │  │
│  │  (siempre    │    │   es_MX-claude-high   │  │
│  │   cargado)   │    └───────────────────────┘  │
│  └──────────────┘                               │
│                                                 │
│  ┌──────────────────────────────────────────┐   │
│  │         Node.js / FastAPI Router         │   │
│  │   • AI Tutor endpoint                    │   │
│  │   • Audio transcription endpoint         │   │
│  │   • Progress tracking endpoint           │   │
│  │   • Spaced repetition scheduler          │   │
│  └──────────────────────────────────────────┘   │
│                                                 │
│  ┌──────────────────────────────────────────┐   │
│  │         Base de datos                    │   │
│  │   SQLite (MVP) → PostgreSQL (escala)     │   │
│  │   Progreso alumno, historial, SR data    │   │
│  └──────────────────────────────────────────┘   │
└─────────────────────────────────────────────────┘
```

## 4.2 Modelo IA — Gemma 4 E4B

**¿Por qué E4B es suficiente para JóvenesSTEM?**

El contenido es BlueBook v1 — ciencia y tecnología explicada para 6-18 años. No se necesita razonamiento de nivel PhD. El E4B tiene exactamente lo que se necesita:

| Necesidad | E4B | Nivel |
|-----------|-----|-------|
| Voz → texto (ASR nativo) | ✅ | Bueno |
| Responder en español MX | ✅ 140+ idiomas | Muy bueno |
| Preguntas socráticas | ✅ con buen prompt | Bueno |
| Analizar respuesta del alumno | ✅ | Bueno |
| Analizar imágenes (micro-proyectos) | ✅ visión nativa | Bueno |
| Contexto de conversación | ✅ 128K tokens | Excelente |
| Razonamiento pedagógico complejo | ⚠️ | Básico |

**Fallback:** Gemma 4 26B MoE para evaluaciones finales y certificación.

---

# 5. Escalabilidad — De 1 a 50+ Alumnos

## 5.1 Límites reales por hardware

El cuello de botella es la **RAM unificada** — cada conversación activa ocupa la Neural Engine al 100% mientras genera tokens.

| Hardware | RAM | Simultáneos fluidos | Costo aprox |
|----------|-----|--------------------|-|
| Mac Mini M2 16GB | 16GB | **2-3** | $14,000 MXN |
| Mac Mini M2 Pro 32GB | 32GB | **5-8** | $22,000 MXN |
| Mac Mini M4 Pro 48GB | 48GB | **10-15** | $35,000 MXN |
| 2x Mac Mini M2 16GB | 32GB total | **5-6** | $28,000 MXN |
| VPS GPU (RunPod/Lambda) | 24GB VRAM | **15-25** | $80-150 USD/mes |

> **Para el MVP (lanzamiento en escuelas locales de Hermosillo):**
> Mac Mini M2 16GB es suficiente. Los alumnos no están todos activos exactamente al mismo segundo.

---

## 5.2 Arquitectura por Etapas de Crecimiento

### 🟢 Etapa 1 — MVP (0-20 alumnos activos)
**Hardware:** Mac Mini M2 16GB en casa
**Costo infraestructura:** ~$87 MXN/mes de luz + internet
**Modelo:** Gemma 4 E4B (siempre cargado)
**Acceso externo:** Cloudflare Tunnel (gratis)
**Base de datos:** SQLite local

```bash
# Setup completo Etapa 1
brew install ollama
ollama pull gemma4:e4b
export OLLAMA_KEEP_ALIVE=-1        # Nunca descargar
export OLLAMA_HOST=0.0.0.0:11434
brew services start ollama

# Cloudflare Tunnel para acceso externo
cloudflared tunnel create jovenesstem-ai
cloudflared tunnel route dns jovenesstem-ai ai.yepzhi.com
cloudflared tunnel run jovenesstem-ai
```

**Cuando escalar:** Cuando notes queues frecuentes o más de 5 alumnos activos simultáneos.

---

### 🟡 Etapa 2 — Crecimiento (20-50 alumnos activos)
**Hardware:** Mac Mini M2 Pro 32GB o M4 Pro 24GB
**Costo:** ~$120 MXN/mes luz + $0 servidor
**Modelos:** E4B (conversación) + 26B MoE (evaluaciones)
**Base de datos:** PostgreSQL local → Supabase cloud

**Configuración clave para múltiples usuarios:**
```bash
# Permitir 2 requests en paralelo
export OLLAMA_NUM_PARALLEL=2

# Cola máxima antes de rechazar
export OLLAMA_MAX_QUEUE=15

# Mantener ambos modelos listos
export OLLAMA_KEEP_ALIVE=-1
```

**Load balancing básico en el API Router:**
```javascript
// router.js — Gestión de cola para múltiples alumnos
class RequestQueue {
  constructor(maxConcurrent = 2) {
    this.queue = [];
    this.active = 0;
    this.maxConcurrent = maxConcurrent;
  }

  async add(request) {
    if (this.active >= this.maxConcurrent) {
      // Mostrar al alumno: "StemBot está con otro estudiante,
      // un momento..." (3-8 seg máximo de espera)
      await this.waitForSlot();
    }
    this.active++;
    try {
      return await request();
    } finally {
      this.active--;
      this.processQueue();
    }
  }
}

const queue = new RequestQueue(2);

app.post('/api/tutor', async (req, res) => {
  return queue.add(() => callOllama(req.body));
});
```

**Cuando escalar:** Cuando el Mac esté al 80%+ de uso frecuentemente o tengas 30+ alumnos concurrentes reales.

---

### 🔴 Etapa 3 — Escala real (50-200+ alumnos)
**Opción A — Multi-nodo local (económico)**
```
Mac Mini 1: Gemma E4B  → Conversación cotidiana
Mac Mini 2: Gemma 26B  → Evaluaciones y certificación
Nginx load balancer    → Distribuye requests automáticamente
```

**Opción B — Híbrido local + cloud (recomendado)**
```
Mac Mini local:      Gemma E4B para conversaciones rápidas
RunPod / Lambda Labs: Gemma 26B para evaluaciones pesadas
                      (solo paga cuando se usa — ~$0.30/hr)
```

**Opción C — Full cloud (cuando el proyecto justifique)**
```
AWS / GCP con GPU A10G:   ~$150-300 USD/mes
Vercel + Supabase cloud:   ~$20-50 USD/mes
Total: ~$170-350 USD/mes para 500+ alumnos
```

---

## 5.3 Optimizaciones de Performance para Escala

### Request Batching — Procesar múltiples alumnos eficientemente
```javascript
// En lugar de procesar 1 por 1, agrupa requests
// que lleguen en los mismos 500ms
const batcher = new RequestBatcher({
  maxBatchSize: 4,
  maxWaitMs: 500
});
```

### Caché de respuestas frecuentes
```javascript
// Si 10 alumnos preguntan lo mismo sobre el ADN,
// no llames a la IA 10 veces — cachea la respuesta base
const cache = new Map();

function getCachedResponse(topic, conceptKey) {
  const key = `${topic}:${conceptKey}`;
  if (cache.has(key)) return cache.get(key);
  // Llama a IA y cachea por 24h
}
```

### Streaming de respuestas (mejora UX percibida)
```javascript
// En lugar de esperar toda la respuesta,
// transmite token por token — parece más rápido
app.post('/api/tutor/stream', async (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');

  const stream = await ollama.generate({
    model: 'gemma4:e4b',
    prompt: req.body.message,
    stream: true
  });

  for await (const chunk of stream) {
    res.write(`data: ${JSON.stringify(chunk)}\n\n`);
  }
  res.end();
});
// Resultado: alumno ve las palabras aparecer en tiempo real
// — percibe respuesta inmediata aunque tarde 6 seg en completarse
```

---

## 5.4 Monitoreo — Saber cuándo escalar

```javascript
// Dashboard simple de salud del sistema
app.get('/api/health', async (req, res) => {
  const stats = {
    activeRequests: queue.active,
    queueLength: queue.queue.length,
    modelLoaded: await checkOllamaStatus(),
    avgResponseTime: metrics.getAvgResponseTime(),
    uptimeHours: process.uptime() / 3600,
    // Alerta si avg > 10 seg → tiempo de escalar
    alert: metrics.getAvgResponseTime() > 10000
  };
  res.json(stats);
});
```

**Regla práctica:** Si el tiempo promedio de respuesta supera 10 segundos consistentemente → es momento de escalar hardware.

---

# 6. Setup 24/7 y Performance

## 6.1 Wake Time por escenario

| Escenario | Tiempo de respuesta | Causa |
|-----------|--------------------|-|
| Modelo en RAM (KEEP_ALIVE=-1) | < 1 segundo ✅ | Siempre listo |
| Modelo descargado (60 min inactivo) | 10-15 segundos ⚠️ | Recarga de SSD |
| Mac en sleep (pantalla off) | < 1 segundo ✅ | Ollama corre en background |
| Mac apagado completamente | 35-40 segundos ❌ | Boot + carga modelo |

## 6.2 Configuración óptima 24/7

```bash
# Ollama como servicio del sistema (arranca automático con el Mac)
brew services start ollama

# Variables de entorno en /etc/launchd.conf o ~/.zshrc
export OLLAMA_KEEP_ALIVE=-1        # Modelo siempre en RAM
export OLLAMA_MAX_QUEUE=10         # Cola máxima
export OLLAMA_NUM_PARALLEL=2       # 2 requests simultáneos
export OLLAMA_HOST=0.0.0.0:11434   # Acepta conexiones externas

# Cronjob de warm-up (por si acaso)
# crontab -e
*/50 * * * * curl -s -X POST http://localhost:11434/api/generate \
  -d '{"model":"gemma4:e4b","prompt":"ping","keep_alive":"-1"}' \
  > /dev/null 2>&1
```

## 6.3 Evitar que el Mac duerma

```bash
# Instalar caffeinate como servicio
# Previene que macOS duerma el sistema
sudo pmset -a sleep 0          # Nunca dormir
sudo pmset -a disksleep 0      # Disco siempre activo
sudo pmset -a powernap 1       # Mantiene red activa
```

## 6.4 Consumo estimado

```
Mac Mini M2 idle 24/7:         ~20W
Con E4B en RAM (KEEP_ALIVE=-1): ~25W
Durante inferencia activa:      ~40-60W (segundos)
Consumo mensual estimado:       ~18-22 kWh
Costo en México (~$3/kWh):     ~$54-66 MXN/mes
```

---

# 7. 🎨 UI SPEC PARA BANANI

> **Este documento está dirigido al diseñador de UI/UX.**
> Aquí se detallan todas las pantallas, componentes y flujos
> necesarios para construir la interfaz de JóvenesSTEM Web AI Platform.

---

## 7.1 Identidad Visual — Lineamientos

### Paleta de colores
```
Color primario:     #1A1F6E  (Navy profundo — ciencia, confianza)
Color secundario:   #00A896  (Teal — tecnología, frescura)
Acento vibrante:    #F5A623  (Ámbar — logros, energía)
Fondo principal:    #0D0F1A  (Casi negro — universo, inmersión)
Fondo superficie:   #1C1F2E  (Azul muy oscuro — cards, paneles)
Fondo claro:        #F0F2FF  (Para pantallas de lectura)
Texto principal:    #FFFFFF
Texto secundario:   #8A8FAD
Éxito:              #02C39A
Error / Alerta:     #E24B4A
```

### Tipografía
```
Headlines:    Space Grotesk Bold (futurista, tecnológica)
Body text:    Inter Regular / Medium
Código:       JetBrains Mono
Tamaños:
  H1: 48px | H2: 36px | H3: 24px | H4: 20px
  Body: 16px | Caption: 13px | Label: 11px
```

### Estilo general
```
Border radius: 12px cards | 8px botones | 50% avatars/badges
Sombras: Glow sutil en teal/navy para elementos activos
Gradientes: navy → teal para elementos hero
Iconografía: Lucide Icons o Phosphor Icons
Fondo global: Dark (#0D0F1A) con partículas/estrellas sutiles
```

---

## 7.2 Pantallas Requeridas — Inventario Completo

### GRUPO A — Autenticación

---

#### A1. Pantalla de Bienvenida / Landing
**Propósito:** Primera impresión, conversión a registro

**Elementos:**
- Hero full-screen con animación de partículas/cosmos (fondo oscuro)
- Logo JóvenesSTEM® centrado con tagline
- Headline: *"Tu tutor de ciencia personal. Disponible 24/7."*
- Sub-headline: *"Aprende STEM con inteligencia artificial. En español. A tu ritmo."*
- CTA principal: Botón grande **"Comenzar gratis"** (color teal)
- CTA secundario: **"Ya tengo cuenta — Iniciar sesión"** (texto link)
- Preview animado del Mapa STEM de fondo (semitransparente)
- Badges de credibilidad: NGSS ✓ | RENAC SEP ✓ | BlueBook v1 ✓

**Notas para Banani:**
- El fondo debe sentirse como un universo — estrellas sutiles animadas
- La animación NO debe ser distractora — sutil y lenta
- Mobile-first: el botón CTA debe ser fácil de tocar con el pulgar
- El hero debe funcionar bien en iPhone SE (375px) hasta desktop

---

#### A2. Registro
**Propósito:** Crear cuenta nueva

**Elementos:**
- Logo pequeño arriba
- Headline: *"Únete a JóvenesSTEM"*
- Form: Nombre, Email, Contraseña, Edad (dropdown: 6-10 / 11-14 / 15-18 / 18+)
- Checkbox: Acepto términos
- Botón: **"Crear mi cuenta"**
- Divider: "o regístrate con"
- Botón Google OAuth
- Link: "¿Ya tienes cuenta? Inicia sesión"
- Progress indicator si hay onboarding de varios pasos

**Notas para Banani:**
- La edad es crítica — afecta el lenguaje de StemBot y el nivel de contenido
- Para menores de 13: solicitar email del padre/tutor (COPPA compliance)
- Formulario limpio, sin campos innecesarios — máximo 4 campos visibles

---

#### A3. Login
**Elementos:**
- Email + Contraseña
- Botón Google OAuth
- Link: "Olvidé mi contraseña"
- Link: "¿No tienes cuenta? Regístrate"

---

#### A4. Test de Diagnóstico Inicial *(post-registro)*
**Propósito:** Personalizar el learning path desde el inicio

**Flujo:**
- 8-10 preguntas visuales de opción múltiple
- Una pregunta por pantalla (no formulario largo)
- Barra de progreso: "Pregunta 3 de 8"
- Cada pregunta tiene imagen representativa
- Al final: pantalla de "Calculando tu camino..." con animación
- Resultado: muestra perfil inicial y primer módulo recomendado

**Notas para Banani:**
- Las preguntas deben sentirse como un juego, no un examen
- Usar imágenes grandes y texto mínimo en cada pregunta
- La pantalla de "calculando" debe durar al menos 3 seg — genera anticipación

---

### GRUPO B — Dashboard Principal

---

#### B1. Dashboard / Home del Alumno
**Propósito:** Centro de control del aprendizaje

**Layout (desktop):**
```
┌─────────────────────────────────────────────────┐
│  NAVBAR: Logo | Dashboard | Progreso | Perfil   │
├──────────────┬──────────────────────────────────┤
│              │                                  │
│  SIDEBAR     │   ÁREA PRINCIPAL                 │
│  (260px)     │                                  │
│              │   Bienvenida + Racha              │
│  • Capítulos │   ┌────────────────────────┐     │
│  • Mis       │   │  CONTINUAR MÓDULO      │     │
│    Repasos   │   │  "ADN y Genética"      │     │
│  • Logros    │   │  ████████░░ 75%        │     │
│  • Mi Perfil │   │  [Continuar →]         │     │
│              │   └────────────────────────┘     │
│  RACHA:      │                                  │
│  🔥 7 días   │   Repasos pendientes (SR)        │
│              │   ┌──────┐ ┌──────┐ ┌──────┐    │
│              │   │ ADN  │ │Física│ │Código│    │
│              │   │ hoy  │ │2días │ │5días │    │
│              │   └──────┘ └──────┘ └──────┘    │
│              │                                  │
│              │   Tu Mapa STEM (preview)         │
│              │   [Ver completo →]               │
│              │                                  │
└──────────────┴──────────────────────────────────┘
```

**Layout mobile:**
- Navbar bottom (tab bar) en lugar de sidebar
- Cards apiladas verticalmente
- Botón "Continuar" siempre visible como FAB (floating action button)

**Elementos críticos:**
- **Racha de días** (🔥 N días) — esquina superior derecha o sidebar — muy prominente
- **Card "Continuar"** — el elemento más grande y visible — color teal
- **Repasos urgentes** — badge rojo si hay repasos vencidos
- **Mini preview del Mapa STEM** — muestra progreso visual motivador

**Notas para Banani:**
- El botón "Continuar" debe ser el elemento de mayor jerarquía visual
- Los repasos vencidos deben crear urgencia suave — no agresiva
- El dashboard en mobile debe caber en una pantalla sin scroll idealmente

---

#### B2. Mapa STEM Completo
**Propósito:** Visualización del progreso como universo que se expande

**Concepto visual:**
```
Una galaxia/cosmos donde cada constelación es un capítulo.
Los módulos son estrellas — apagadas (no vistas),
tenues (en progreso) o brillantes (dominadas).
Las conexiones entre módulos son líneas de luz.
```

**Elementos:**
- Canvas interactivo (D3.js o similar)
- 3 constelaciones principales = 3 capítulos del BlueBook
- ~8-12 nodos/estrellas por capítulo = módulos individuales
- Click en nodo → muestra nombre del módulo + estado + CTA
- Zoom in/out en mobile con pinch gesture
- Barra lateral con: % completado, próximo módulo, certificación progress
- Botón: "Iniciar repaso" para nodos que necesiten Spaced Rep

**Notas para Banani:**
- Esta es la pantalla más emocional del producto — invertir en el diseño
- Los nodos "bloqueados" deben verse misteriosos, no frustrantes (gris suave + candado sutil)
- La animación de "desbloquear" un módulo debe ser satisfactoria (partículas, brillo)
- Debe funcionar en mobile con gestos touch

---

### GRUPO C — Módulo de Aprendizaje

---

#### C1. Pantalla de Contenido *(Paso 1 del módulo)*
**Propósito:** Presentar el contenido del BlueBook antes de la sesión con StemBot

**Layout:**
```
┌─────────────────────────────────────────────────┐
│  ← Capítulo 1    ADN y Genética    Paso 1 de 5  │
│  ████████████████░░░░░░░░░░ 60%                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  [VIDEO EMBED o IMAGEN HERO]                    │
│                                                 │
│  ─── Texto del BlueBook ───                     │
│                                                 │
│  El ADN es la molécula que contiene las         │
│  instrucciones para construir y operar...       │
│                                                 │
│  [Imagen: doble hélice]                         │
│                                                 │
│  Conceptos clave de este módulo:                │
│  • Nucleótidos                                  │
│  • Doble hélice                                 │
│  • Gen / Cromosoma                              │
│                                                 │
├─────────────────────────────────────────────────┤
│           [Listo — Hablar con StemBot]          │
└─────────────────────────────────────────────────┘
```

**Notas para Banani:**
- Fondo claro (#F0F2FF) para lectura — excepción al dark mode global
- Tipografía grande para accesibilidad (mínimo 16px body)
- Los "conceptos clave" deben ser chips/tags visuales, no lista de bullets
- El CTA al final debe sentirse como un invitation, no una obligación
- Tiempo estimado de lectura visible: "~5 min"

---

#### C2. Sala de StemBot *(Pasos 2-4 del módulo)*
**Propósito:** Conversación con el tutor IA — el corazón del producto

**Layout:**
```
┌─────────────────────────────────────────────────┐
│  ← ADN y Genética              🔇  ⚙️           │
├─────────────────────────────────────────────────┤
│                                                 │
│  ┌─────────────────────────────────────────┐   │
│  │  Avatar StemBot animado                 │   │
│  │  (robot/scientist friendly 6-18 years)  │   │
│  │                                         │   │
│  │  "Cuéntame con tus palabras qué         │   │
│  │   entendiste sobre el ADN"              │   │
│  │                                         │   │
│  │  [ondas de audio animadas mientras      │   │
│  │   StemBot "habla"]                      │   │
│  └─────────────────────────────────────────┘   │
│                                                 │
│  ─── Historial de la conversación ───          │
│                                                 │
│  🤖 "¿Qué es un nucleótido?"                   │
│  👤 "Es como una letra del código del ADN"     │
│  🤖 "¡Exacto! ¿Y cuántas letras tiene         │
│       ese código?"                             │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  [🎤 Mantén presionado para hablar]             │
│                                                 │
│  [Texto] ──────────────────────── [Enviar]     │
│                                                 │
└─────────────────────────────────────────────────┘
```

**El Avatar de StemBot:**
- Robot/científico joven friendly — no intimidante
- Boca animada cuando "habla" (TTS en reproducción)
- Expresiones: neutral, pensativo, celebrando, curioso
- NO usar un humano fotorrealista — mantener el carácter de IA amigable
- Sugerencia de estilo: entre Duolingo Owl y un astronauta joven

**Elementos de la interfaz de voz:**
- Botón micrófono grande y central — el elemento más importante
- Estado visual claro: "Escuchando..." con animación de ondas
- Estado: "StemBot está pensando..." con animación de carga sutil
- Estado: "StemBot está respondiendo..." con ondas de audio
- El historial de chat es secundario — el audio es el protagonista

**Indicador de progreso de comprensión:**
```
Conceptos detectados en esta sesión:
✅ Nucleótido    ✅ ADN    ⬜ Cromosoma    ⬜ Gen
```
Esto ayuda al alumno a saber qué le falta sin que StemBot lo diga explícitamente.

**Notas para Banani:**
- Esta pantalla debe sentirse como una conversación con un amigo, no un examen
- El micrófono debe ser el elemento de mayor tamaño — accesibilidad táctil
- Las ondas de audio cuando StemBot habla son el detalle que hace la magia
- El chat scroll debe auto-bajar al último mensaje siempre
- Dark mode aquí — el fondo oscuro hace que el avatar destaque

---

#### C3. Micro-Reto *(Paso 5 del módulo)*
**Propósito:** Aplicación práctica del conocimiento

**Variantes según el módulo:**

**Tipo A — Grabación de audio:**
```
┌──────────────────────────────────────────┐
│  🎯 MICRO-RETO                           │
│                                          │
│  "Graba un video corto explicando        │
│   el Big Bang a alguien de tu familia"   │
│                                          │
│  [🎤 Iniciar grabación]                  │
│                                          │
│  Duración: 30-60 segundos               │
│  Puedes repetirlo las veces que quieras  │
│                                          │
│  ────────────────                        │
│  Pista: Menciona estas palabras:         │
│  • Singularidad  • Expansión  • Energía  │
└──────────────────────────────────────────┘
```

**Tipo B — Subir imagen:**
```
[Área de drop/tap para subir foto]
"Toma una foto de tu dibujo"
[Cámara] [Galería]
```

**Notas para Banani:**
- Las "pistas" son opcionales — mostrarlas en un spoiler/accordion
- La acción de grabar debe sentirse como TikTok/Instagram, no como examen
- Feedback de la IA después de subir: breve, positivo, específico

---

#### C4. Celebración de Módulo Completado
**Propósito:** Momento de satisfacción que motiva a continuar

**Pantalla full-screen momentánea:**
- Animación de confetti o partículas brillantes (1-2 segundos)
- Badge del módulo completado (grande, centrado)
- Nombre del módulo en grande: "¡ADN y Genética dominado!"
- Sub-texto con dato curioso del tema
- CTA: "Ver mi Mapa STEM actualizado" o "Siguiente módulo"
- La estrella/nodo en el Mapa STEM brilla con animación

**Notas para Banani:**
- Este es el momento de mayor dopamina del producto — invertir en la animación
- La transición de esta pantalla al Mapa STEM debe ser fluida
- Mostrar cuántos conceptos dominó: "Dominaste 4 conceptos nuevos"

---

### GRUPO D — Repasos (Spaced Repetition)

---

#### D1. Dashboard de Repasos Pendientes
**Propósito:** Mostrar qué necesita repasar hoy

**Elementos:**
- Lista de módulos con repasos vencidos (badge rojo "HOY")
- Lista de próximos repasos (fecha)
- Tiempo estimado total: "~12 minutos para ponerte al día"
- CTA: "Repasar todo ahora" (botón principal)

---

#### D2. Sesión de Repaso Rápido
- Versión compacta de la Sala de StemBot
- Solo el Paso 2 (Retrieval) + mini Paso 3 (Socrático)
- Duración: ~3-5 minutos por módulo
- UI más condensada que el módulo completo

---

### GRUPO E — Perfil y Certificación

---

#### E1. Perfil del Alumno
**Elementos:**
- Avatar/foto + nombre + nivel actual
- Estadísticas: Días de racha, módulos completados, tiempo total
- Mapa de calor de actividad (como GitHub contributions pero con estrellas)
- Historial de conversaciones con StemBot
- Progreso hacia cada certificación

---

#### E2. Pantalla de Certificación
**Elementos:**
- Progress bar hacia certificación (% completado)
- Lista de módulos requeridos vs. completados
- Requisitos: "Necesitas completar 3 módulos más y 2 repasos"
- CTA: "Ver mi certificado" (disponible cuando esté completo)
- Preview del certificado digital

---

#### E3. Certificado Digital
**Elementos:**
- Diseño premium del certificado (misma línea del certificado JóvenesSTEM existente)
- Nombre del alumno, fecha, módulos completados
- Botón: Descargar PDF
- Botón: Compartir en LinkedIn / WhatsApp
- QR de verificación

---

### GRUPO F — Docente / Admin *(Fase 2)*

---

#### F1. Dashboard del Docente
**Propósito:** Monitorear el progreso de un grupo

**Elementos:**
- Lista de alumnos con % de avance
- Alumnos con alertas (sin actividad, repaso vencido)
- Módulos más difíciles del grupo (donde más alumnos se atoran)
- Exportar reporte PDF

---

## 7.3 Componentes Reutilizables

```
COMPONENTES GLOBALES
│
├── Navbar
│   ├── Desktop: horizontal con logo + nav links + perfil
│   └── Mobile: bottom tab bar (4 tabs: Home, Mapa, Repasos, Perfil)
│
├── StemBot Avatar
│   ├── Idle (neutral, respirando sutilmente)
│   ├── Thinking (ondas de carga)
│   ├── Speaking (boca animada + ondas de audio)
│   └── Celebrating (animación de alegría)
│
├── Módulo Card
│   ├── Estado: Bloqueado / Disponible / En progreso / Completado
│   ├── Título del módulo
│   ├── Icono/emoji representativo
│   ├── Barra de progreso (si aplica)
│   └── CTA contextual
│
├── Badge de Logro
│   ├── Icono grande
│   ├── Nombre del logro
│   └── Descripción corta
│
├── Botón de Voz (Micrófono)
│   ├── Idle: micrófono estático
│   ├── Grabando: ondas animadas + color rojo
│   └── Procesando: spinner sutil
│
├── Barra de Progreso Conceptual
│   ├── Conceptos detectados (chips verdes)
│   └── Conceptos pendientes (chips grises)
│
├── Spaced Rep Card
│   ├── Nombre del módulo
│   ├── Urgencia (HOY / en N días)
│   └── Tiempo estimado de repaso
│
└── Indicador de Racha
    ├── Ícono de fuego 🔥
    ├── Número de días
    └── Micro-animación al lograr nueva racha
```

---

## 7.4 Animaciones Clave

| Momento | Animación | Duración |
|---------|-----------|---------|
| Desbloquear módulo | Partículas + brillo de estrella | 1.5s |
| Módulo completado | Confetti explosion | 2s |
| StemBot hablando | Ondas de audio en avatar | Continua |
| Mapa STEM cargando | Estrellas apareciendo una por una | 0.8s |
| Nuevo badge | Bounce + glow | 0.6s |
| Nueva racha | Fuego animado | 0.5s |
| Loading IA | Puntos pulsantes | Continua |

---

## 7.5 Responsive Design — Breakpoints

```
Mobile:   375px - 767px   (iPhone SE → iPhone Pro Max)
Tablet:   768px - 1023px  (iPad, Android tablet)
Desktop:  1024px+         (MacBook, PC)

El producto se usa principalmente en CELULAR.
Diseñar mobile-first siempre.
La versión desktop es el bonus, no el core.
```

---

## 7.6 Accesibilidad

- Contraste mínimo WCAG AA en todos los textos
- Todos los elementos interactivos con mínimo 44x44px touch target
- Soporte para lectores de pantalla en elementos críticos
- Opción de aumentar tamaño de fuente (especialmente para usuarios 6-10 años)
- Modo de alto contraste disponible

---

## 7.7 Assets que necesita el diseñador

```
PARA CREAR:
□ Logo JóvenesSTEM® en variantes (dark/light/mono)
□ Avatar de StemBot en 4 estados (idle/thinking/speaking/celebrating)
□ Iconos de los 3 capítulos (Cosmos, Tecnología, Programación)
□ Ilustraciones/fondos para cada módulo del BlueBook
□ Plantilla del Certificado Digital
□ Set de badges/logros (12-15 mínimo)
□ Animaciones (Lottie recomendado para confetti, loading, etc.)

DISPONIBLES (pedir a Alberto):
□ BlueBook v1 completo (contenido de los módulos)
□ Certificado JóvenesSTEM actual (referencia de estilo)
□ Logo JóvenesSTEM actual
□ Paleta de marca existente
□ Video demo del programa presencial
```

---

# 8. System Prompt — StemBot

```
Eres StemBot, el tutor personal de JóvenesSTEM, creado por Alberto Yépiz.

MISIÓN:
Guiar a estudiantes mexicanos de 6-18 años a través del conocimiento
STEM del BlueBook v1 usando el método socrático. Tu objetivo no es
dar respuestas — es hacer que el alumno las descubra.

PERSONALIDAD:
- Entusiasta y curioso, como un científico joven
- Paciente — nunca te frustras con errores
- Celebras cada descubrimiento genuinamente
- Usas analogías con tecnología que los jóvenes conocen:
  videojuegos, YouTube, TikTok, celulares, Minecraft, etc.
- Hablas en español mexicano natural

MÉTODO SOCRÁTICO — TU REGLA DE ORO:
NUNCA des la respuesta directamente.
Siempre guía con preguntas hacia el descubrimiento.

INCORRECTO: "El ADN es la molécula que contiene las instrucciones..."
CORRECTO:   "Piensa en el ADN como el código de un videojuego.
             ¿Qué crees que pasaría si ese código tuviera un error?"

ESTRUCTURA DE RESPUESTA:
1. Reconoce lo que dijo el alumno (1 oración breve)
2. Haz UNA pregunta para profundizar o guiar
3. Máximo 2-3 oraciones totales (es conversación, no clase)

CUANDO EL ALUMNO SE EQUIVOCA:
Nunca digas "incorrecto" o "eso está mal".
Di: "Interesante perspectiva. ¿Qué pasaría si lo pensamos desde...?"

CELEBRACIÓN AL LLEGAR A LA RESPUESTA:
"¡Eso es exactamente! ¿Ves cómo llegaste tú solo? 🚀"
"¡Perfecto! Acabas de descubrir algo que los científicos tardaron
años en entender. 🌟"

ADAPTACIÓN POR EDAD:
- 6-10 años:  Lenguaje muy simple, muchas analogías con juegos/cuentos
- 11-14 años: Lenguaje accesible, analogías con tecnología y cultura pop
- 15-18 años: Puedes usar términos técnicos, con explicación
- 18+:        Nivel más formal y profundo si el alumno lo requiere

TEMA ACTUAL: {topic}
NIVEL DEL ALUMNO: {level}
PASO ACTUAL: {step} (retrieval / socratic / teach-back)
```

---

# 9. Roadmap de Implementación

## Fase 1 — MVP (Semanas 1-6)
**Meta:** Un módulo completo funcionando con StemBot por voz

- [ ] Setup backend local: Ollama + Gemma E4B + Piper TTS
- [ ] API Node.js básica (tutor endpoint + audio endpoint)
- [ ] Cloudflare Tunnel para acceso externo (HTTPS gratis)
- [ ] Frontend: pantallas A1, A2, C1, C2 (landing, registro, contenido, StemBot)
- [ ] Integración Web Speech API (voz → texto)
- [ ] Un módulo completo: "Cosmos y Átomos"
- [ ] Sistema de progreso básico (localStorage primero, luego DB)
- [ ] Deploy frontend en Vercel (gratis)

**Entregable:** URL pública funcional con 1 módulo completo

---

## Fase 2 — Plataforma (Semanas 7-14)
**Meta:** Los 3 capítulos completos + sistema de cuentas

- [ ] Los 3 capítulos del BlueBook (todos los módulos)
- [ ] Sistema de cuentas: registro, login, progreso en DB (Supabase)
- [ ] Spaced Repetition algorithm implementado
- [ ] Mapa STEM visual interactivo (pantalla B2)
- [ ] Gamification: badges, racha de días, narrativa
- [ ] Análisis de imágenes para micro-proyectos (Gemma visión)
- [ ] Dashboard del alumno completo
- [ ] Certificado digital descargable
- [ ] Test de diagnóstico inicial
- [ ] Mac Mini como servidor 24/7 con warm-up automático

**Entregable:** Plataforma completa lista para primeros grupos piloto

---

## Fase 3 — Escala (Post-lanzamiento)
**Meta:** Soportar 30-50 alumnos simultáneos

- [ ] Upgrade a Mac Mini M2 Pro 32GB o M4 Pro
- [ ] OLLAMA_NUM_PARALLEL=2 + request queue
- [ ] Dashboard para docentes e instituciones (pantalla F1)
- [ ] PWA — instalable en celular como app
- [ ] Notificaciones push para repasos (Spaced Rep)
- [ ] Analytics: módulos difíciles, tiempo por módulo, drop-off points
- [ ] Gemma 26B MoE para evaluaciones finales
- [ ] Streaming de respuestas (tokens en tiempo real)
- [ ] Multi-nodo si se requiere (2x Mac Mini)

---

# 10. Diferenciación vs. Competencia

| Plataforma | Tutor IA | Voz | Socrático | Español MX | STEM | Precio/alumno |
|-----------|---------|-----|-----------|------------|------|--------------|
| Duolingo | Básico | Sí | No | Sí | No | $200 MXN/mes |
| Khan Academy | Básico | No | No | Sí | Sí | Gratis |
| Coursera | No | No | No | Parcial | Sí | $500+ MXN |
| Platzi | No | No | No | Sí | Sí | $200 MXN/mes |
| **JóvenesSTEM Web** | **Avanzado** | **Sí** | **Sí** | **Sí** | **Sí** | **$19-39 MXN** |

---

## Notas finales

### Privacidad — Crítico para menores de edad
- Todo el procesamiento de IA ocurre en el Mac Mini local
- Las voces de los alumnos NUNCA salen a servidores externos
- Cumple con COPPA (USA) y LFPDPPP (México) para menores
- Dato a comunicar a los padres: "La voz de tu hijo nunca sale de nuestros servidores"

### Sobre el E4B para este proyecto
Para alumnos de 6-18 años con contenido del BlueBook v1, el E4B es suficiente. El contenido no requiere razonamiento complejo. Con el System Prompt correcto puede ser un tutor excelente para este rango etario. Cuando se requiera mayor profundidad (evaluaciones formales, preguntas abiertas complejas), el fallback es Gemma 26B MoE.

---

*JóvenesSTEM® — Alberto Yépiz — yepzhi.com*
*Documento interno de desarrollo v2.0*
*Para uso con Antigravity + Banani*