# Business Landing (sample)

This scaffold is a minimal Vite + React + MUI static landing site with a sample contact form.

Quick start:

```bash
npm install
npm run dev
```

Notes:
- The contact form POSTs to `/contact` by default (same origin). In development, Vite proxies `/contact` to the Node backend.
- If your backend is on a different host/port in production, set `VITE_BACKEND_URL` when building the frontend (see `.env.example`).
- Replace sample text and images in `src/components` with your real content.

Production (separate domains):
- Frontend: set `VITE_BACKEND_URL` to your backend origin (e.g. `http://your-backend.example.com`) and redeploy the frontend (Vite env is build-time).
- Backend: set `ALLOWED_ORIGIN` (or `FRONTEND_URL`) to your frontend origin (e.g. `http://your-frontend.example.com`) so the browser is allowed to POST.
