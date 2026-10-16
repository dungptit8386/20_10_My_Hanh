import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' để deploy được lên GitHub Pages (project page) lẫn Vercel/Netlify
export default defineConfig({
  base: './',
  plugins: [react()],
})
