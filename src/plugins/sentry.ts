import * as Sentry from '@sentry/vue';

export default defineNuxtPlugin((nuxtApp) => {
    const router = useRouter();
    const {
        public: { sentryDsn },
    } = useRuntimeConfig();

    if (!sentryDsn) {
        return;
    }

    Sentry.init({
        app: nuxtApp.vueApp,
        dsn: sentryDsn,
        environment: process.env.NODE_ENV,
        integrations: [
            new Sentry.BrowserTracing({
                routingInstrumentation: Sentry.vueRouterInstrumentation(router),
            }),
            new Sentry.Replay(),
        ],
        tracesSampleRate: 0.25,
        tracePropagationTargets: ['https://projects.blackdayz.de'],
        profilesSampleRate: 0.25,

        replaysSessionSampleRate: 0.25,
        replaysOnErrorSampleRate: 0.5,
    });
});
