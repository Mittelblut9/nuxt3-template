import fs from 'fs';
import path from 'path';
import { load } from 'js-yaml';

function loadYamlTranslations(locale: string) {
    const dirPath = path.resolve(`./i18n/locales/${locale}`);
    console.log(`Loading translations from ${dirPath}`);
    const files = fs.readdirSync(dirPath);
    return files.reduce((acc, file) => {
        // check if the file is a directory
        const filePath = path.join(dirPath, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            const nestedTranslations = loadYamlTranslations(path.join(locale, file));
            return { ...acc, ...nestedTranslations };
        }
        if ((file.endsWith('.yaml') || file.endsWith('.yml')) && !file.startsWith('._')) {
            const dir = path.join(dirPath, file);
            console.log(`Loading translations from ${dir}`);
            const content = fs.readFileSync(path.join(dirPath, file), 'utf8');
            const data = load(content);
            return { ...acc, ...(typeof data === 'object' && data !== null ? data : {}) };
        }
        return acc;
    }, {});
}

export function generateJsonTranslations() {
    const locales = ['de'];
    locales.forEach((locale) => {
        const translations = loadYamlTranslations(locale);
        fs.writeFileSync(
            path.resolve(`./i18n/locales/.generated/${locale}-${locale.toUpperCase()}.json`),
            JSON.stringify(translations, null, 2)
        );
    });
}
