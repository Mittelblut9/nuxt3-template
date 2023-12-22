// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  srcDir: 'src',
  css: [
    '~/assets/scss/base.scss',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Nuxt 3 Template',
    },
  },
  plugins: [
    '~/plugins/bootstrap.client.ts',
    '~/plugins/fontawesome.ts',
    { src: '@/plugins/aos', mode: 'client' }
  ],
  extensions: ['ts', 'js'],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
})
