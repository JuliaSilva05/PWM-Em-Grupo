import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path relativa para funcionamento correto em produção
  base: './',
  // Configurações de build para produção
  build: {
    // Diretório de saída
    outDir: 'dist',
    // Compressão de assets estáticos
    assetsInlineLimit: 4096,
    // Separação do CSS
    cssCodeSplit: true,
    // Minificação
    minify: 'terser',
    // Sourcemaps
    sourcemap: false,
  }
})
