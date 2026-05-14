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
        manualChunks: (id, { getModuleInfo }) => {
          if (id.includes('node_modules/framer-motion')) return 'framer';
          if (id.includes('node_modules/react-router') || id.includes('node_modules/@remix-run')) return 'router';
          if (id.includes('node_modules/lucide-react')) return 'icons';
          if (
            id.includes('node_modules/react/') ||
            id.includes('node_modules/react-dom/') ||
            id.includes('node_modules/scheduler')
          ) return 'react-core';
          if (id.includes('src/system')) return 'ui-core';

          // mermaid + all its transitive deps land in their own chunk
          if (id.includes('node_modules/mermaid')) return 'mermaid';
          if (id.includes('node_modules')) {
            const info = getModuleInfo(id);
            const onlyImportedByMermaid = info && info.importers.length > 0 &&
              info.importers.every((imp) => imp.includes('node_modules/mermaid') || imp.includes('mermaid-'));
            if (onlyImportedByMermaid) return 'mermaid';
          }
        }
      }
    },
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 2000,
    cssCodeSplit: true,
    sourcemap: false,
    modulePreload: {
      polyfill: false,
      resolveDependencies: (_f, deps) => deps.filter((d) => !/icons-|ui-core-|framer-|mermaid-/.test(d))
    }
  }
})
