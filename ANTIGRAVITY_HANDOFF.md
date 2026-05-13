# Antigravity Handoff — JóvenesSTEM

Fecha: 2026-05-12

## Resumen

Se trabajó el primer bloque crítico del análisis: seguridad del Worker/API, flujo Stripe/certificado, sanitización de contenido, consistencia de textos y tooling mínimo de validación.

## Cambios Hechos

### 1. Cloudflare Worker endurecido

Archivo principal: `cloudflare_worker.js`

- Se cambiaron rutas API genéricas por rutas exactas:
  - `GET /api/clerk-config`
  - `GET /api/firebase-config`
  - `GET /api/config`
  - `POST /api/tutor`
  - `POST /api/stripe/checkout`
  - `GET /api/stripe/session`
  - `POST /api/stripe/webhook`
- Se bloquea acceso público a rutas internas bajo `_src`, `_dev`, `package.json`, `obfuscate.js` y `wrangler.toml`.
- StemBot ya no acepta `systemInstruction` del cliente; el Worker impone el prompt del tutor.
- Se limita el historial enviado a Gemini, tamaño de payload y `generationConfig`.
- Se agregó rate limit best-effort en memoria por IP + usuario.
- Se agregó CSP más restrictiva que antes, aunque todavía mantiene `unsafe-inline` porque el proyecto usa muchos estilos/scripts inline.
- Se agregó verificación manual de firmas Stripe Webhook con HMAC SHA-256.

### 2. Stripe y certificado

Archivos:

- `_src/app.js`
- `_src/progress.js`
- `cloudflare_worker.js`

Cambios:

- `startStripeCheckout()` ahora requiere sesión Clerk antes de crear Checkout.
- El frontend crea Checkout vía `POST /api/stripe/checkout`.
- Después de volver de Stripe, el dashboard ya no confía en `?payment=success`; verifica `session_id` con `GET /api/stripe/session`.
- El botón de descargar certificado solo aparece si existe una sesión Stripe pagada y verificada.
- Firestore/localStorage guardan:
  - `hasCertificate`
  - `stripeCheckoutSessionId`
  - `certificatePaidAt`

Nota importante: el webhook valida pagos y deja el punto de extensión listo, pero todavía no escribe server-side en Firestore porque no hay service account/admin binding configurado. Para producción fuerte, el siguiente paso es persistir pagos desde el Worker usando D1/KV/Firestore Admin.

### 3. Sanitización de contenido

Archivos:

- `_src/app.js`
- `_src/tutor.js`

Cambios:

- Se agregó `escapeHTML`.
- Se escaparon títulos, excerpts, duración, key points, nombre del usuario en modal y contenido de lectura.
- Se agregó validación simple para SVG inline de capítulos.
- El modo lectura oscuro también escapa el contenido antes de renderizarlo.

### 4. Textos corregidos

Archivos:

- `index.html`
- `dashboard.html`
- `_src/app.js`

Cambios:

- `213 módulos desbloqueados` -> `227 módulos desbloqueados`.
- `StemBot AI ilimitado` -> `Tutor IA con uso responsable`.
- `Voz neuronal TTS` -> `Lectura por voz integrada`.
- `Manco abierto` -> `Marco abierto`.
- `Americas` -> `Américas`.
- Badge `MITHIC` -> `MYTHIC`.
- El CTA placeholder de formulario para certificado ahora dispara Stripe Checkout.

### 5. Tooling y validaciones

Archivos:

- `package.json`
- `package-lock.json`
- `scripts/validate_js.cjs`
- `scripts/validate_modules.cjs`

Cambios:

- `npm test` ya no falla por placeholder.
- Nuevos comandos:
  - `npm run validate:js`
  - `npm run validate:data`
  - `npm run check`
  - `npm test`
- `validate:data` revisa estructura, duplicados, contenido y estadísticas de `data/modules.json`.
- `validate:js` parsea los JS fuente y el Worker como módulos/scripts según corresponda.

## Comandos Corridos

```bash
npm install
npm test
npm run build
npm test
```

Resultado:

- `npm audit`: 0 vulnerabilidades.
- `npm test`: OK.
- `data/modules.json`: 5 capítulos, 227 módulos, 227 con fullText, 1,347 key points, 171,690 palabras.
- Build ejecutado y archivos ofuscados de raíz regenerados.

## Comandos Recomendados Para Antigravity

Antes de commit:

```bash
npm install
npm test
npm run build
git status --short
git diff --stat
```

Para deploy con Worker:

```bash
wrangler secret put GEMINI_API_KEY
wrangler secret put FIREBASE_API_KEY
wrangler secret put STRIPE_SECRET_KEY
wrangler secret put STRIPE_WEBHOOK_SECRET
wrangler deploy
```

Opcional si se usa Price ID creado en Stripe:

```bash
wrangler secret put STRIPE_CERT_PRICE_ID
```

Webhook recomendado en Stripe:

```text
https://yepzhi.com/api/stripe/webhook
```

Evento mínimo:

```text
checkout.session.completed
```

## Pendientes Importantes

1. Persistencia server-side del certificado:
   - Hoy se verifica Stripe antes de mostrar el botón, pero el webhook todavía no escribe en Firestore/Admin.
   - Recomendado: guardar `userId`, `sessionId`, `payment_status` y folio en D1/KV o Firestore con service account.

2. Rate limit robusto:
   - El rate limit actual usa memoria del Worker, útil como primera barrera.
   - Recomendado: Durable Object, KV o Turnstile para protección real distribuida.

3. CSP sin `unsafe-inline`:
   - Todavía se necesita por HTML/CSS inline.
   - Recomendado: mover estilos inline a `styles.css` y handlers inline a listeners JS.

4. Firestore rules:
   - Revisar reglas para asegurar que cada usuario solo escriba su propio documento.
   - Evitar que el usuario pueda marcar `hasCertificate` manualmente desde cliente.

5. E2E real:
   - `check_login.js` requiere Puppeteer, pero Puppeteer no está instalado.
   - Recomendado: instalar Playwright/Puppeteer y crear smoke tests para login, dashboard, módulos y tutor.

## Referencias Usadas

- Stripe Checkout Sessions API: https://docs.stripe.com/api/checkout/sessions/create
- Stripe webhook signature verification: https://docs.stripe.com/webhooks
