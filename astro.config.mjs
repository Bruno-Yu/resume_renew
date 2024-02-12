import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwind from '@astrojs/tailwind';
// import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: []
  },
  integrations: [vue(), tailwind()]
});