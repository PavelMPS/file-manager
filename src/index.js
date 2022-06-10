// npm run start -- --username=Pavel
import * as readline from 'node:readline';
import * as path from 'path';
import * as os from 'os';
import { stdin as input, stdout as output } from 'node:process';

import {
    getName, 
    sayGoodbye,
    readTheFile,
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
    let currentDirectory = homeDirectory;

    process.stdout.write(`Welcome to the File Manager, ${name}!\n`);
    showCurrentDir(currentDirectory);
    
    rl.on('line', (input) => {
        const command = input.split(' ');
        switch (command[0]) {
            case '.exit': 
                sayGoodbye(rl, name);
                break;
            case 'up':
                currentDirectory = changeCurrentDirectory(currentDirectory, command[0]);
                showCurrentDir(currentDirectory);
                break;
            case 'cd':
                currentDirectory = changeCurrentDirectory(currentDirectory,command[0], command[1]);
                showCurrentDir(currentDirectory);
                break;
            case 'ls':
                showDirectoryContains(currentDirectory);
                showCurrentDir(currentDirectory);
                break;
            case 'cat':
                readTheFile(currentDirectory, command[1]);
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
