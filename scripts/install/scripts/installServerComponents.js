import * as fs from 'fs';
import * as path from 'path';

export default function installServerComponents() {
    try {
        const serverPath = path.join('src', 'server');

        const serverUtilsPath = path.join(serverPath, 'utils');
        const serverConfigPath = path.join(serverPath, 'config');
        const serverApiPath = path.join(serverPath, 'api');

        fs.mkdirSync(serverUtilsPath, { recursive: true });
        fs.mkdirSync(serverConfigPath, { recursive: true });
        fs.mkdirSync(serverApiPath, { recursive: true });

        const serverInterfaceFile = path.join(serverUtilsPath, 'interface.ts');
        const serverEnumFile = path.join(serverUtilsPath, 'enum.ts');
        const serverConfigGitKeepFile = path.join(serverConfigPath, '.gitkeep');
        const serverApiGitKeepFile = path.join(serverApiPath, '.gitkeep');

        fs.writeFileSync(serverInterfaceFile, '');
        fs.writeFileSync(serverEnumFile, '');
        fs.writeFileSync(serverConfigGitKeepFile, '');
        fs.writeFileSync(serverApiGitKeepFile, '');

        console.info('Server components installed successfully.');
    } catch (error) {
        console.error('Error creating server components:', error);
        throw new Error('Failed to install server components.');
    }
}
