import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // Allow previewing the dev server through an ngrok tunnel
    allowedHosts: ['.ngrok-free.app', '.ngrok.app', '.ngrok.io'],
  },
})
