import * as readline from 'readline';
import * as util from 'util';
import installServerComponents from './scripts/installServerComponents.js';
import installDocker from './scripts/installDocker.js';
import installAppwrite from './scripts/installAppwrite.js';
import removeInstallationScripts from './scripts/removeInstallationScripts.js';

const InstallableItems = {
    IncludeServer: 1,
    Docker: 2,
    Appwrite: 3,
    Supabase: 4
};

const translations = {
    en: {
        IncludeServer: 'With Server Components (API)',
        Database: 'Database',
        Docker: 'Docker',
        Appwrite: 'Appwrite',
        Supabase: 'Supabase'
    },
};

const defaultLanguage = 'en';

async function main() {
    console.log('Starting installation...');
    const args = process.argv.slice(2);

    if (args.includes('--skip')) {
        console.log('Skipping installation steps as requested.');
        return;
    }

    const readlineInterface = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const question = util.promisify(readlineInterface.question).bind(readlineInterface);

    for (const item in InstallableItems) {
        const wantToInstall = await question(`${translations[defaultLanguage][item]}? (y/N) `);
        if (wantToInstall.toLowerCase() === 'y') {
            switch (InstallableItems[item]) {
                case InstallableItems.IncludeServer:
                    installServerComponents();
                    break;
                case InstallableItems.Database:
                    console.error('Currently not supported. Please install a database manually.');
                    break;
                case InstallableItems.Docker:
                    installDocker();
                    break;
                case InstallableItems.Appwrite:
                    installAppwrite();
                    break;
                case InstallableItems.Supabase:
                    console.log(`Installing ${item}...`);
                    break;
            }
        }
    }

    console.log('=========================================================');
    console.log('Installation completed successfully.');
    console.log('Please run "pnpm run dev" to start the development server.');
    console.log('If you encounter any issues, please refer to the documentation or open an issue on GitHub.');
    console.log('Thank you for using our nuxt 3 template!');
    console.log('=========================================================');

    removeInstallationScripts();

    readlineInterface.close();
}

main();
