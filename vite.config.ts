import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path';

import Markdown from 'vite-plugin-md';

export default defineConfig({
  plugins: [
    vue({ include: [/\.vue$/, /\.md$/] }),
    Markdown()
  ],
  server: {
    host: 'localhost',
    port: 8000,
    open: true
  },
  alias: {
    "/@/": path.resolve(__dirname, "src"),
  }
})
