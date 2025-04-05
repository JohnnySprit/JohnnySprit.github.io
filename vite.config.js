import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/JohnnySprit.github.io",
  server: {
    port: 8000,
    watch: {
      usePolling: true
    }
  }
})
