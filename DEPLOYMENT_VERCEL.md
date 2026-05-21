# Despliegue en Vercel

## 1 · Conectar el repositorio

1. Crea un proyecto nuevo en [vercel.com/new](https://vercel.com/new) e importa este repositorio.
2. Vercel detectará el framework como **Vite**. No necesitas tocar el `Build Command` ni el `Output Directory` — ya están en `vercel.json`.

## 2 · Variables de entorno

En el dashboard del proyecto → **Settings → Environment Variables**:

| Nombre              | Valor                          | Entornos              |
| ------------------- | ------------------------------ | --------------------- |
| `OPENAI_API_KEY`    | `sk-...` (tu clave real)       | Production · Preview · Development |
| `OPENAI_MODEL`      | `gpt-4o-mini` (o el que uses)  | Production · Preview · Development |

> ⚠️ **No marques** `VITE_OPENAI_API_KEY`. El cliente nunca debe ver la clave — todas las llamadas pasan por la function `/api/chat`.

## 3 · Build & deploy

`vercel.json` ya define:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    { "source": "/((?!api/).*)", "destination": "/index.html" }
  ]
}
```

El rewrite manda todo el tráfico a `index.html` excepto `/api/*`, que se sirve desde las funciones serverless en `api/`.

## 4 · Verificación

Después del deploy:

```bash
curl https://<tu-dominio>.vercel.app/api/health
# → { "ok": true, "service": "tealium-cert-api", "time": "..." }
```

Si responde, las functions están bien desplegadas. Prueba luego el chatbot desde la UI.

## 5 · Logs

Vercel → tu proyecto → **Logs**. Filtra por function `/api/chat` para ver errores de OpenAI (rate limit, modelo no disponible, etc.).
