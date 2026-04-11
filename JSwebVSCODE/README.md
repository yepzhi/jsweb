# JóvenesSTEM Web AI Platform

Tutor personal de IA para STEM con método socrático, voz interactiva y aprendizaje adaptativo.

## 🚀 Características

- ✅ Tutor IA con método socrático (Gemini API)
- ✅ Voz interactiva (Web Speech API)
- ✅ Interfaz moderna y responsive
- ✅ Sistema de spaced repetition
- ✅ Módulos del BlueBook v2
- ✅ Detección automática de conceptos
- ✅ Dashboard personalizado
- ✅ Gamification (racha, badges)

## 📋 Requisitos

- Node.js 18+ 
- npm o yarn
- Cuenta Google Cloud (para Gemini API)
- Cuenta Supabase (para auth + DB)

## 🔧 Setup Local

### 1. Clonar repositorio
```bash
cd /Users/yepz/JSwebVSCODE
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar variables de entorno

Copia `.env.local` y completa con tus credenciales:

```bash
# Google Gemini API
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key

# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

**Cómo obtener credenciales:**

#### Gemini API Key
1. Ir a [Google AI Studio](https://aistudio.google.com)
2. Click "Get API Key"
3. Create new project o seleccionar existing
4. Copy API Key

#### Supabase
1. Ir a [Supabase](https://supabase.com)
2. Create new project
3. Ir a Project Settings > API
4. Copy `URL` y `anon public key`

### 4. Iniciar servidor de desarrollo
```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🏗️ Estructura del Proyecto

```
JSwebVSCODE/
├── app/                      # Next.js app router
│   ├── page.tsx             # Landing page
│   ├── dashboard/           # Dashboard principal
│   ├── modules/[id]/        # Módules (contenido + tutor)
│   ├── auth/                # Autenticación
│   ├── layout.tsx           # Layout raíz
│   └── globals.css          # Estilos globales
├── components/              # React components reutilizables
│   ├── StemBotAvatar.tsx   # Avatar del tutor IA
│   ├── MicrophoneButton.tsx # Botón para grabar audio
│   ├── Navbar.tsx           # Navegación
│   ├── ModuleCard.tsx       # Tarjeta de módulo
│   └── ConceptBadge.tsx     # Badge de concepto
├── lib/                      # Funciones/utilities
│   ├── gemini-tutor.ts      # Wrapper de Gemini API + prompt StemBot
│   ├── speech.ts            # Web Speech API wrappers
│   ├── supabase.ts          # Cliente Supabase
│   └── spaced-repetition.ts # Algoritmo SM-2
├── public/                   # Archivos estáticos
│   └── data/modules.json    # Definición de módules
├── middlewear.ts             # Next.js middleware
├── .env.local               # Variables de entorno (NO COMMIT)
├── tsconfig.json            # Config TypeScript
├── tailwind.config.js       # Config Tailwind
└── package.json             # Dependencias
```

## 🎓 Módulos Disponibles

### Capítulo I: Nuestra Ciencia 🌌
- Historia del Universo
- Los Átomos
- La Luz y el Espectro Electromagnético

### Capítulo II: Nuestra Tecnología ⚙️
- Redes Inalámbricas
- Procesadores y CPU

### Capítulo III: Nuestra Programación 💻
- Fundamentos de Programación
- Inteligencia Artificial y Machine Learning

## 🔌 API Endpoints (Futuros)

```
POST /api/auth/register          # Registrarse
POST /api/auth/login             # Iniciar sesión
POST /api/tutor                  # Chat con StemBot
POST /api/progress               # Guardar progreso
GET  /api/progress/[userId]      # Obtener progreso
```

## 🎨 Diseño

- **Tema:** Dark mode (universo STEM)
- **Colores primarios:**
  - Primario: #1A1F6E (Navy)
  - Secundario: #00A896 (Teal)
  - Acento: #F5A623 (Ámbar)
- **Tipografía:** Inter (body), Space Grotesk (headlines)
- **Framework CSS:** Tailwind CSS

## 📱 Responsive Design

- Mobile-first approach
- Bottom navigation en mobile
- Optimizado para iPhone SE (375px) y up
- Desktop optimizado para 1024px+

## 🚢 Deploy a Producción

### Opción 1: Vercel (Recomendado)

```bash
npm install -g vercel
vercel login
vercel deploy
```

1. Conecta tu GitHub repo
2. Configura variables de entorno en Vercel dashboard
3. Automatic deployments en cada push

### Opción 2: Cloudflare Pages

```bash
npm run build
wrangler publish
```

### Opción 3: Tu servidor personal

```bash
npm run build
npm run start
```

## 🧪 Testing (Futuro)

```bash
npm run test      # Unit tests
npm run e2e       # E2E tests
```

## 📊 Analytics

- Vercel Analytics integrado
- Google Analytics (opcional)
- Tracking de conceptos aprendidos
- Tracking de engagement

## 🔒 Seguridad

- ✅ HTTPS obligatorio en producción (Vercel/Cloudflare)
- ✅ Variables de entorno no committeadas
- ✅ Supabase RLS (Row Level Security)
- ✅ Validación de inputs
- ✅ CORS configurado

## 📝 Notas de Desarrollo

### Gemini API
- Usamos `gemini-1.5-flash` (fast, cheap)
- Rate limit: ~15 req/min en free tier
- Para producción, considera upgrade

### Web Speech API
- Chrome/Edge/Safari soportan bien
- Firefox tiene soporte parcial
- Fallback a text input siempre disponible

### Supabase (vs Firebase)
- PostgreSQL nativo (más poderoso)
- RLS built-in
- Más barato en escala
- Migraciones SQL

## 🐛 Troubleshooting

**"Gemini API key not found"**
- Verifica `.env.local` tiene `NEXT_PUBLIC_GEMINI_API_KEY`
- Restart servidor de desarrollo

**"Supabase connection error"**
- Verifica `NEXT_PUBLIC_SUPABASE_URL` es correcto
- Check Supabase dashboard está online

**"Speech recognition not working"**
- Solo funciona en HTTPS (o localhost)
- Requiere permisos de micrófono
- Verifica navegador soporta Web Speech API

## 🎯 Próximas Fases

- [ ] Fase 1 (MVP): Completar todas las páginas del dashboard
- [ ] Fase 2: Tutor local (Ollama + Mac Mini)
- [ ] Fase 3: PWA + offline mode
- [ ] Fase 4: Admin dashboard para docentes
- [ ] Fase 5: Certificaciones oficiales

## 👤 Autor

- **Alberto Yépiz** | [yepzhi.com](https://yepzhi.com)
- JóvenesSTEM® 2024

## 📜 Licencia

MIT License - ver LICENSE file

---

**¿Tienes preguntas?** Contacta a Alberto en yepzhi.com
