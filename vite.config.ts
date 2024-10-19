import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://fablab-booking-system.onrender.com',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ''), // Rewrite the URL path if needed
  //     },
  //   },
  // },
})
