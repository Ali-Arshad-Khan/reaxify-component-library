import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets',
          dest: '', // copies to dist/assets (including images folder inside it)
        },
      ],
    }),
  ],
   build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'MyComponentLibrary',
      fileName: (format) => `my-component-library.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})
