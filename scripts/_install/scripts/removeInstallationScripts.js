import * as fs from 'fs';
import * as path from 'path';

export default function removeInstallationScripts() {
    try {
        console.info('Removing installation scripts...');

        const packageJsonPath = path.join('.', 'package.json');
        if (fs.existsSync(packageJsonPath)) {
            const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
            if (packageJson.scripts && packageJson.scripts['scripts:install']) {
                delete packageJson.scripts['scripts:install'];
                fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
                console.info('Install script removed from package.json.');
            } else {
                console.warn('No install script found in package.json.');
            }
        } else {
            console.error('package.json not found. Cannot remove install script.');
            throw new Error('package.json not found.');
        }

        const scriptsDir = path.join('scripts', '_install');
        if (fs.existsSync(scriptsDir)) {
            fs.rmSync(scriptsDir, { recursive: true, force: true });
            console.info('Installation scripts removed successfully.');
        } else {
            console.warn('Installation scripts directory does not exist. Nothing to remove.');
        }
    } catch (error) {
        console.error('Error removing installation scripts:', error);
        throw new Error('Failed to remove installation scripts.');
    }
}
