import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Nike-reactjs-landing-page/',  // Adjust this path to your GitHub Pages URL
  plugins: [react()],
})
