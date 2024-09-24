import * as Sentry from '@sentry/nuxt';

export default defineNuxtPlugin({
    name: 'sentry',
    parallel: true,
    setup() {
        const {
            public: { sentryDsn },
        } = useRuntimeConfig();

        if (!sentryDsn) {
            return;
        }

        Sentry.init({
            dsn: sentryDsn,
            environment: process.env.NODE_ENV,
            integrations: [
                Sentry.browserTracingIntegration(),
            ],
            tracesSampleRate: 0.25,
            tracePropagationTargets: ['http://127.0.0.1:3000'],
        });
    }
});