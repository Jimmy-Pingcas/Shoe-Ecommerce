import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5174,
    hmr: {
      overlay: true,
    },
    watch: {
      // Use polling on some Windows setups or network drives where FS events are unreliable
      usePolling: true,
    },
  },
})
