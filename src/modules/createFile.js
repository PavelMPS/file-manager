import * as fs from "fs";
import * as path from "path";

export async function createNewFile (currentPath, fileName) {
    const pathToFile = path.join(currentPath, fileName);

    const isFile = fs.existsSync(pathToFile);
    if(!isFile) {
        fs.writeFile(pathToFile,'', err => {
            if (err) {
                console.error('FS operation failed!');
            }     
        });
    } else {
        console.error('File already exist!');
    }
}
