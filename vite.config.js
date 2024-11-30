import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Nike-reactjs-landing-page/',  // This is crucial
  plugins: [react()],
})
