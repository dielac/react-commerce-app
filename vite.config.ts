// vite.config.ts

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { configDefaults } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts', // 🛠 tell vitest to load jest-dom
    exclude: [...configDefaults.exclude],
    globals: true,
  },
});
