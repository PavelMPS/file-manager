// npm run start -- --username=Pavel
import * as readline from 'node:readline';
import * as path from 'path';
import * as os from 'os';
import { stdin as input, stdout as output } from 'node:process';

import {
    getName, 
    sayGoodbye,
    readTheFile,
    copyTheFile,
    createNewFile,
    renameTheFile,
    showCurrentDir,
    getHomeDirectory,
    showDirectoryContains,
    changeCurrentDirectory,
} from './modules/index.js';

const rl = readline.createInterface({ input, output });

function start () {
    os.homedir();
    const name = getName(process.argv);
    const homeDirectory = getHomeDirectory();
    let currentPath = homeDirectory;

    process.stdout.write(`Welcome to the File Manager, ${name}!\n`);
    showCurrentDir(currentPath);
    
    rl.on('line', (input) => {
        const command = input.split(' ');
        switch (command[0]) {
            case '.exit': 
                sayGoodbye(rl, name);
                break;
            case 'up':
                currentPath = changeCurrentDirectory(currentPath, command[0]);
                showCurrentDir(currentPath);
                break;
            case 'cd':
                currentPath = changeCurrentDirectory(currentPath,command[0], command[1]);
                showCurrentDir(currentPath);
                break;
            case 'ls':
                showDirectoryContains(currentPath);
                break;
            case 'cat':
                readTheFile(currentPath, command[1]);
                break;
            case 'add':
                createNewFile(currentPath, command[1]);
                showCurrentDir(currentPath);
                break;
            case 'rn':
                renameTheFile(currentPath, command[1], command[2]);
                break;
            case 'cp':
                copyTheFile(currentPath, command[1], command[2]);
                break;
            default:
                process.stdout.write('Invalid input');
                break;
        }
    
      });
       
    rl.on('SIGINT', () => {
       sayGoodbye(rl, name);
    })
    
}

start();
