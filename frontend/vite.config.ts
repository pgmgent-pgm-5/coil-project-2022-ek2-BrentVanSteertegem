import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Unfonts from 'unplugin-fonts/vite'

export default defineConfig({
  plugins: [
    react(),
    Unfonts({
      custom: {
        families: [
          {
            name: 'Poppins',
            src: './src/assets/fonts/Poppins.otf',
          },
          {
            name: 'Legothick',
            src: './src/assets/fonts/Legothick.ttf',
          },
        ],
        display: 'auto',
        preload: true,
        injectTo: 'head',
      }
    }),  
  ],
})
