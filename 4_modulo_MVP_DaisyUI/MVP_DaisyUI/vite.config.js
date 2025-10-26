import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    Components({
      dirs: ['src/components'],
      extensions: ['vue'],
      deep: true,
      dts: false,
      include: [/\.vue$/, /\.vue\?vue/, /\.vue\.[tj]sx?\?vue/],
      exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
      excludeNames: [/^Async.+/],
    }),
    tailwindcss(),
    AutoImport({
      eslintrc: {
        enabled: true, // <-- this
      },
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx

        /\.vue$/, // .vue

        /\.vue\?vue/, // .vue?vue

        /\.md$/, // .md
      ],

      imports: ['vue'],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
