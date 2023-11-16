// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  srcDir: 'src/',
  dir: {
    pages: 'pages',
    assets: 'core/assets',
    layouts: 'core/layouts',
    public: 'core/public',
    middleware: 'core/middleware'
  },
  components: {
    dirs: ['core/components']
  }
});
