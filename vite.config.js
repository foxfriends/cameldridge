const { defineConfig } = require('vite');
const { resolve } = require('path');
const { svelte } = require('@sveltejs/vite-plugin-svelte');

module.exports = defineConfig({
  plugins: [svelte()],
  rollupDedupe: ['svelte'],
  root: 'src/',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        404: resolve(__dirname, 'src/404.html'),
      },
    },
  },
});
