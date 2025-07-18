import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['/src/test-setup.ts'],
  },
  resolve: {
    alias: {
      '@test-utils': '/src/test-utils',
      '@': '/src',
    },
  },
});
