import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',  // Critical! Makes all assets use relative paths
  build: {
    outDir: 'dist',
  },
});