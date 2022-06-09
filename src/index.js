// npm run start -- --username=your_username
import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';

import { getName } from "./modules/getUsername.js";

const rl = readline.createInterface({ input, output });
const name = getName(process.argv);

function closeAndSayGoodbye() {
    process.stdout.write(`Thank you for using File Manager, ${name}!`);
    rl.close();
}

rl.on('line', (input) => {
    console.log(`Received: ${input}`);
    switch (input) {
        case '.exit': 
            closeAndSayGoodbye();
            break;
        default:
            console.log('Invalid input');
            break;
    }
  });

process.stdout.write(`Welcome to the File Manager, ${name}!\n`);

rl.on('SIGINT', () => {
   closeAndSayGoodbye();
})

