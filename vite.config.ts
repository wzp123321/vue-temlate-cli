import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 2333,
    proxy: {
      '/api': {
        target: 'http://192.168.50.24:8200',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'z-vue-cli',
      formats: ['es'],
      fileName: 'index',
    },
    outDir: 'lib',
    sourcemap: false,
  },
  optimizeDeps: {
    exclude: ['vue'],
  },
});
