import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],

  server: {
    proxy: {
      // 👇 Any request starting with /api/suggestions will be forwarded
      '/api/suggestions': {
        target: 'https://suggestqueries.google.com',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api\/suggestions/, ''), 
      },
    },
  },
})
