import * as fs from 'fs';
import * as path from 'path';

export default function removeInstallationScripts() {
    try {
        console.info('Removing installation scripts...');

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
