import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [
      react(), 
      tailwindcss(),
    ],
  }
  
  // Only set base for production builds
  if (command === 'build') {
    config.base = '/Usha-portfolio'
  }
  
  return config
})