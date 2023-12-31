import { defineConfig } from 'vite'
import dns from 'dns'
import react from '@vitejs/plugin-react'
import Unfonts from 'unplugin-fonts/vite'
import pluginRewriteAll from 'vite-plugin-rewrite-all'

dns.setDefaultResultOrder('verbatim')

export default defineConfig({
  plugins: [
    react(),
    pluginRewriteAll(),
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
      },
    }),
  ],
})
