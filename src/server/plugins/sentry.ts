import * as Sentry from '@sentry/node';
import { ProfilingIntegration } from '@sentry/profiling-node';

export default defineNitroPlugin((nitroApp) => {
    const { sentryDsn } = useRuntimeConfig();

    if (!sentryDsn) {
        console.warn('Sentry DSN not set, skipping Sentry initialization');
        return;
    }

    Sentry.init({
        dsn: sentryDsn,
        environment: process.env.NODE_ENV,
        integrations: [new ProfilingIntegration()],
        tracesSampleRate: 0.25,
        profilesSampleRate: 0.25,
    });

    nitroApp.hooks.hook('error', (error) => {
        Sentry.captureException(error);
    });
    nitroApp.hooks.hook('request', (event) => {
        event.context.$sentry = Sentry;
    });

    nitroApp.hooks.hookOnce('close', async () => {
        await Sentry.close(2000);
    });
});
