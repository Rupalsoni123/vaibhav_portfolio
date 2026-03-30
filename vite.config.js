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
  optimizeDeps: {
    force: true,
    include: ['react', 'react-dom']
  },
  resolve: {
    dedupe: ['react', 'react-dom']
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        // REMOVED manualChunks for vendor libraries. 
        // Vite's default chunking strategy is safer for preventing initialization order issues 
        // with React and Lucide-React in production.
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            return 'vendor'; // All node_modules in one vendor chunk
          }
          if (id.includes('src/system')) {
            return 'ui-core'; // Core OS logic in its own chunk
          }
        }
      }
    },
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 2000,
    cssCodeSplit: true,
    sourcemap: false
  }
})
