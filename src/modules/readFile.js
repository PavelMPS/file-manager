import * as fs from "fs";
import * as path from "path";
import { showCurrentDir } from "../modules/index.js";

export async function readTheFile(currentPath, fileName) {
    const filePath = path.join(currentPath, fileName);
    const isFile = fs.existsSync(filePath);
    
    if (isFile) {
        const readStream = fs.createReadStream(filePath, 'utf-8');
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
