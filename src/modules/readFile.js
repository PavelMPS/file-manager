import * as fs from "fs";
import * as path from "path";
import { showCurrentDir } from "../modules/index.js";

export async function readTheFile(currentPath, fileName) {
    const isFile = fs.existsSync(path.join(currentPath, fileName));
    if (isFile) {
        const readStream = fs.createReadStream(path.join(currentPath, fileName), 'utf-8');
        readStream.on('data', chunk => {
            process.stdout.write(chunk);
        });
        readStream.on('end', () => {
            process.stdout.write('\n');
            showCurrentDir(currentPath);
        })
    } else {
        console.error('File is not exist!');
    }
}
