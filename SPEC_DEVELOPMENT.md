# JóvenesSTEM - Spec Development 🚀 (v1.2)

## 📌 Visión General
Esta plataforma está diseñada para ofrecer un ecosistema STEM dinámico, seguro y escalable, utilizando un stack moderno enfocado en Server-Side Rendering (SSR), UI reactiva y componentes nativos construidos con utilidades Tailwind.

## 🛠️ Stack Tecnológico Completo

| Tecnología / Herramienta | Propósito en el Proyecto |
| :--- | :--- |
| **Next.js 14/15 (App Router)** | Framework React principal. Provee ruteo, renderizado híbrido y protege la API de Gemini usando endpoints del lado del servidor. |
| **React 19** | Motor de renderizado UI y gestión del estado (hooks como `useState`, `useEffect`, `useRef`). |
| **Tailwind CSS v4** | Motor central de diseño estético. Sustituye al CSS "vainilla" (CSS puro), promoviendo la consistencia global mediante clases utilitarias (`className="..."`). |
| **Google Gemini AI** | Tutor conversacional (Large Language Model) que procesa lenguaje natural para guiar a los estudiantes en temas STEM. |
| **Supabase** | Base de datos PostgreSQL y Auth (listo para reemplazar Firebase para una arquitectura más relacional). |
| **TypeScript** | Añade tipado estático al código previniendo errores de compilación y asegurando contratos estrictos entre los módulos STEM. |
| **Lucide React** | Conjunto de iconos vectoriales ultraligeros. Evitan el "layout shift" de herramientas como Iconify. |
| **Vercel** | Infraestructura de alojamiento en la Nube (CI/CD nativo, Edge Networks, Functions serverless). |
| **Cloudflare Worker** | Maneja el proxy reverso del enrutamiento de la URL limpia en el dominio principal de la estructura histórica. |

## 📐 Decisiones Arquitectónicas Recientes
1. **Root Configuration:** La aplicación Node/Next.js se ha migrado a la raíz absoluta del repositorio (`/Users/yepz/JSweb`) para encajar nativamente con los despliegues automáticos de Vercel (eliminando subcarpetas innecesarias).
2. **Estilo "Tailwind-Native" (v1.2):** Se han purgado los estilos `style={{...}}` embebidos en el código React. Se utiliza un 100% las utilidades nativas de Tailwind CSS asegurando diseño responsivo predictivo y un código inmensamente más limpio.
3. **Eje Rector:** Implementación global del *Light Theme* (Blanco `#ffffff` y Azul Eléctrico `#277eff`).

## 🔄 Flujo de Despliegue (Deploy)
1. Escribir código -> Reemplazar CSS legacy con Tailwind.
2. `npm run build` localizado en root.
3. Commit Git (`git add . && git commit ...`) -> Push a Vercel CI.

---
*Documento generado mecánicamente para el control de ingeniería. Versión 1.2.*
