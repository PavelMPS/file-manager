import * as fs from "fs";
import * as path from "path";

export async function createNewFile (currentPath, fileName) {
    const filePath = path.join(currentPath, fileName);

    const isFile = fs.existsSync(filePath);
    if(!isFile) {
        fs.writeFile(filePath,'', err => {
            if (err) {
                console.error('FS operation failed!');
            }     
        });
    } else {
        console.error('File already exist!');
    }
}
