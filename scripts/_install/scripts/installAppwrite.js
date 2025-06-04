import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

export default function installAppwrite() {
    console.info('Installing Appwrite module for Nuxt 3...');
    console.info('Running "npx nuxi@latest module add appwrite"...');
    const execFailed = execSync('npx nuxi@latest module add appwrite', { stdio: 'inherit' });
    if (execFailed) {
        console.error('Error adding Appwrite module:', execFailed.error);
        throw new Error('Failed to add Appwrite module.');
    }
    console.info('Appwrite module added successfully.');

    console.info('Configuring nuxt.config.ts for Appwrite...');
    const nuxtConfigPath = path.join('nuxt.config.ts');
    const nuxtConfig = fs.readFileSync(nuxtConfigPath, 'utf8');
    // add new appwrite config to nuxt.config.ts
    const updatedAppwriteConfigNuxtConfig = nuxtConfig.replace(
        /export default defineNuxtConfig\({/,
        `
export default defineNuxtConfig({
    appwrite: {
        endpoint: process.env.APPWRITE_ENDPOINT,
        project: process.env.APPWRITE_PROJECT_ID,
    },
    runtimeConfig: {
        public: {
            sentryDsn: process.env.SENTRY_DSN,
            appwriteConfig: {
                databaseId: process.env.APPWRITE_DATABASE_ID,
            },
        },
    },
        `,
    );
    fs.writeFileSync(nuxtConfigPath, updatedAppwriteConfigNuxtConfig);
    execSync('pnpm run code:format', { stdio: 'inherit' });

    const envExamplePath = path.join('.env.example');
    const envExampleContent = fs.readFileSync(envExamplePath, 'utf8');
    const updatedAppwriteConfigEnvExample = envExampleContent + `
#### Appwrite Configuration ####
APPWRITE_ENDPOINT=http://localhost/v1
APPWRITE_PROJECT_ID=your_project_id
APPWRITE_DATABASE_ID=your_database_id
#### Appwrite Configuration ####
`;

    fs.writeFileSync(envExamplePath, updatedAppwriteConfigEnvExample);

    console.info('Appwrite configuration added successfully.');
}
