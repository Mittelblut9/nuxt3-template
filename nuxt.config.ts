// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-07-21',
  devtools: { enabled: true },
  srcDir: 'src',
  runtimeConfig: {
    public: {
      sentryDsn: process.env.SENTRY_DSN,
      appwriteConfig: {
        databaseId: process.env.APPWRITE_DATABASE_ID,
      },
    }
  },
  colorMode: {
    preference: 'light',
  },
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
  modules: ['@nuxtjs/i18n', '@nuxt/ui', //'nuxt-appwrite'
  '@nuxt/image', '@nuxt/fonts'],
  plugins: [
    '~/plugins/bootstrap.client.ts',
    '~/plugins/fontawesome.ts',
    { src: '@/plugins/aos', mode: 'client' }
  ],
  nitro: {
    plugins: [
      '~/server/plugins/sentry.ts',
    ],
  },
  extensions: ['ts', 'js'],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  i18n: {
    lazy: true,
    langDir: 'locales/',
    strategy: 'no_prefix',
    defaultLocale: 'de',
    locales: [
      {
        code: 'de',
        iso: 'de',
        name: 'Deutsch',
        file: 'de.json'
      }
    ],
    compilation: {
      escapeHtml: false,
      strictMessage: false
    },
  },
  appwrite: {
    endpoint: process.env.APPWRITE_ENDPOINT,
    project: process.env.APPWRITE_PROJECT_ID,
  },
})