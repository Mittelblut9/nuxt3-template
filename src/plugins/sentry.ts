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
            new Sentry.BrowserTracing(),
            new Sentry.BrowserProfilingIntegration(),
            new Sentry.Replay({
                maskAllText: true,
                blockAllMedia: true,
            }),
        ],
        tracesSampleRate: 0.25,
        tracePropagationTargets: ['https://projects.blackdayz.de', 'http://127.0.0.1:3000'],
        profilesSampleRate: 0.5,

        replaysSessionSampleRate: 0.5,
        replaysOnErrorSampleRate: 0.5,
    });
});
