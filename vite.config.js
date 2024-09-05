import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: {
      components: '/src/components',
      helpers: '/src/helpers',
      img: '/src/img',
      services: '/src/services',
      '@redux': '/src/redux',
      validationSchemas: '/src/validationSchemas',
    },
  },
});
