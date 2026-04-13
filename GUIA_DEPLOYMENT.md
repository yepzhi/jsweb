# 🤖 INSTRUCCIONES DE DESPLIEGUE PARA AGENTES IA

> **ATENCIÓN AGENTES IA:** Este documento dicta las reglas estrictas de flujo de trabajo para repositorios conectados a Vercel con subdirectorios. **Léelo y aplícalo en todos los commits.**

## 1. Arquitectura de Despliegue en Vercel
- El código en este repositorio se despliega **automáticamente en Vercel** en cada push a la rama `main`.
- La aplicación real (Next.js) **NO ESTÁ EN LA RAÍZ** del repositorio. Vive en el subdirectorio `/JSwebVSCODE/`.
- El **Root Directory en Vercel** debe estar configurado como `JSwebVSCODE`.
- La URL de producción base es `jovenesstem-web.vercel.app/jsweb` (observa el basePath en `next.config.js`).

## 2. Reglas Estrictas para Commits
Cuando realices cambios como Agente IA en este repositorio, **DEBES** seguir este flujo al pie de la letra para evitar que el CI/CD en Vercel falle o se corrompa el historial:

1. **Verificar que compila localmente antes de hacer commit:**
   Ejecuta `npm run build` dentro de `/JSwebVSCODE/`. NUNCA hagas commit si el build falla. Vercel rechazará el despliegue automático de todas formas.

2. **Revisar secretos expuestos (¡CRÍTICO!):**
   Antes de `git add`, verifica que ningún `.env.local`, API key o contraseña hardcodeada (Gemini, Supabase, Firebase) se vaya a agregar al staging area.
   - El archivo `.gitignore` en la raíz ya cubre la mayoría de casos, pero cerciórate.

3. **Flujo de Command Line (si el build fue exitoso):**
   ```bash
   cd /Users/yepz/JSweb  # Asegurarte de estar en la raíz
   git add .
   git commit -m "tipo: Descripción clara de lo que arregló o agregó el agente"
   git push origin main
   ```

## 3. ¿Por qué fallaban despliegues anteriores?
- Se creaban archivos HTML en la raíz que competían o causaban confusión con el proyecto Next.js real.
- Vercel marcaba errores (Exit Code 1) porque el agente hacía deploy manual con `vercel --prod` en vez de simplemente hacer `git push` y dejar que el CI/CD de Vercel (conectado a GitHub) maneje el build limpio.
- Había errores de TypeScript omitidos. **SIEMPRE corrige los errores de Type y Build antes del push.**

## 4. Acción Requerida (Agent Workflow Check)
Si te piden hacer deployment o guardar los cambios:
1. Asegúrate de arreglar el código.
2. Haz `npm run build` en el subdirectorio para validar.
3. Haz `git commit & push`.
4. Observa el estatus, no intentes hacer force-deploy con Vercel CLI a menos que esté estrictamente solicitado y/o GitHub integration esté rota.
