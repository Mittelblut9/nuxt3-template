export default defineI18nConfig(() => {
    return {
        legacy: false,
        locale: 'de-DE',
        fallbackLocale: 'de-DE',
        modifiers: {
        // @ts-ignore
            snakeCase: (str: string) => str.split(' ').join('-')
        },
        missingWarn: true,
        fallbackWarn: true,
        warnHtmlMessage: false,
        silentFallbackWarn: false,
        silentTranslationWarn: false
    };
});
