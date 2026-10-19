import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// Dev server proxy: forward API calls to the local backend during development.
// This prevents CORS issues and lets the frontend call `/contact` directly.
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/contact': {
        target: 'http://localhost:1337',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
