import { generateJsonTranslations } from './scripts/i18n/loadYamlTranslations';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/i18n',
        '@nuxt/ui',
        '@nuxt/image',
        '@nuxt/fonts',
        '@sentry/nuxt/module',
        '@nuxtjs/seo',
        '@nuxt/eslint',
    ],
    plugins: [
        '~/plugins/sentry.ts',
    ],
    ssr: false,
    components: [
        {
            path: '~/components',
            pathPrefix: false,
        },
    ],
    imports: {
        dirs: [
            'composables/**',
            'utils/**',
        ]
    },
    devtools: { enabled: true },
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Nuxt 3 Template',
        },
    },
    css: [
        '~/assets/css/main.css',
        '~/assets/scss/base.scss',
    ],
    colorMode: {
        preference: 'dark',
    },
    extensions: ['ts', 'js'],
    devServer: {
        url: 'http://127.0.0.1:3000',
    },
    future: {
        compatibilityVersion: 4,
    },
    compatibilityDate: '2025-03-26',
    typescript: {
        typeCheck: false,
        strict: false,
        tsConfig: {
            exclude: ['node_modules'],
        },
        shim: true,
    },
    hooks: {
        'build:before': () => {
            generateJsonTranslations();
        },
        'webpack:change': () => {
            generateJsonTranslations();
        },
        'builder:watch': () => {
            generateJsonTranslations();
        },
    },
    i18n: {
        langDir: 'locales/.generated/',
        strategy: 'no_prefix',
        defaultLocale: 'de-DE',
        locales: [
            {
                code: 'de-DE',
                language: 'de-DE',
                name: 'Deutsch',
                file: 'de-DE.json',
            },
        ],
        compilation: {
            escapeHtml: false,
            strictMessage: false
        }
    },
    ogImage: {
        enabled: false
    },
});
