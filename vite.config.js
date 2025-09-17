import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/todo-app/',
  plugins: [react()],
  server: {
    host: true,         // ← вот это важно
    port: 5173          // можно указать порт явно, если хочешь
  }
})
