import * as path from 'path';
import * as fs from 'fs';

export default function installDocker() {
    try {
        console.info('Installing Docker files...');
        const dockerFiles = path.join('scripts', 'install', '_files', 'docker');
        const destinationPath = path.join('.');

        fs.readdirSync(dockerFiles).forEach((file) => {
            const sourceFile = path.join(dockerFiles, file);
            const destFile = path.join(destinationPath, file);

            if (fs.lstatSync(sourceFile).isDirectory()) {
                fs.mkdirSync(destFile, { recursive: true });
                fs.readdirSync(sourceFile).forEach((subFile) => {
                    fs.copyFileSync(path.join(sourceFile, subFile), path.join(destFile, subFile));
                });
            } else {
                fs.copyFileSync(sourceFile, destFile);
            }
        });

        console.info('Docker files installed successfully.');
        console.info('Updating package.json scripts...');

        const packageJsonPath = path.join('.', 'package.json');
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

        packageJson.scripts = {
            ...packageJson.scripts,
            'docker:start': 'docker compose up -d && pnpm run docker:logs',
            'docker:logs': 'docker compose logs -f',
            'docker:stop': 'docker compose down',
            'docker:bash:app': 'docker compose exec app bash',
        };
        fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

        console.info('package.json scripts updated successfully.');

        console.info('Docker installation completed successfully.');
    } catch (error) {
        console.error('Error installing Docker files:', error);
        throw new Error('Failed to install Docker files.');
    }
}
