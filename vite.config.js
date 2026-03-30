import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import apiPlugin from './vite-api-plugin.js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    apiPlugin()
  ],
  server: {
    host: true,
    port: 3000
  },
  build: {
    // 1. Minification using Terser for better dead-code elimination
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs for production
        drop_debugger: true
      }
    },
    // 2. Manual Chunks for optimized code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-lucide': ['lucide-react'],
          'ui-components': [
            './src/system/Window.jsx',
            './src/system/WindowManager.jsx',
            './src/system/OSContext.jsx'
          ]
        }
      }
    },
    // 3. Asset optimization
    assetsInlineLimit: 4096, // Inline small assets under 4KB
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true,
    sourcemap: false
  }
})
