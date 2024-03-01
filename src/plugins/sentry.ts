import * as Sentry from '@sentry/browser';

export default defineNuxtPlugin(() => {
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
            new Sentry.BrowserProfilingIntegration(),
            Sentry.replayIntegration({
                maskAllText: true,
                blockAllMedia: true,
            }),
        ],
        tracesSampleRate: 0.25,
        tracePropagationTargets: ['http://127.0.0.1:3000'],
        profilesSampleRate: 0.5,

        replaysSessionSampleRate: 0.5,
        replaysOnErrorSampleRate: 0.5,
    });
});
