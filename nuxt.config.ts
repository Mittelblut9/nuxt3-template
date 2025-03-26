import fs from 'fs';
import path from 'path';
import { load } from 'js-yaml';

function loadYamlTranslations(locale: string) {
    const dirPath = path.resolve(`./i18n/locales/${locale}`);
    const files = fs.readdirSync(dirPath);
    return files.reduce((acc, file) => {
        if (file.endsWith('.yaml') || file.endsWith('.yml')) {
            const content = fs.readFileSync(path.join(dirPath, file), 'utf8');
            const data = load(content);
            return { ...acc, ...(typeof data === 'object' && data !== null ? data : {}) };
        }
        return acc;
    }, {});
}

function generateJsonTranslations() {
    const locales = ['de'];
    locales.forEach((locale) => {
        const translations = loadYamlTranslations(locale);
        fs.writeFileSync(
            path.resolve(`./i18n/locales/.generated/${locale}-${locale.toUpperCase()}.json`),
            JSON.stringify(translations, null, 2)
        );
    });
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    extends: [
        '@nuxt/ui-pro'
    ],
    modules: ['@nuxtjs/i18n', // 'nuxt-appwrite'
        '@nuxt/ui', '@nuxt/image', '@nuxt/fonts', '@sentry/nuxt/module', '@nuxtjs/seo', '@nuxt/eslint',],
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
        '~/assets/scss/base.scss',
    ],
    colorMode: {
        preference: 'dark',
    },
    runtimeConfig: {
        public: {
            sentryDsn: process.env.SENTRY_DSN,
            appwriteConfig: {
                databaseId: process.env.APPWRITE_DATABASE_ID,
            },
        }
    },
    srcDir: 'src',
    extensions: ['ts', 'js'],
    devServer: {
        https: true,
    },
    compatibilityDate: '2024-11-14',
    typescript: {
        typeCheck: true,
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
    },
    // @ts-expect-error - appwrite module is not installed in the base template
    appwrite: {
        endpoint: process.env.APPWRITE_ENDPOINT,
        project: process.env.APPWRITE_PROJECT_ID,
    },
    i18n: {
        lazy: true,
        langDir: 'locales/.generated/',
        strategy: 'no_prefix',
        defaultLocale: 'de-DE',
        vueI18n: './vue-i18n.options.ts',
        locales: [
            {
                code: 'de-DE',
                language: 'de-DE',
                name: 'Deutsch',
                file: 'de-DE.json'
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
