import * as fs from "fs";
import * as path from "path";

export async function renameTheFile(currentPath, pathToFile, newFileName) {
    const fullPath = path.isAbsolute(pathToFile) ? pathToFile : path.join(currentPath, pathToFile);
    const isFile = fs.existsSync(fullPath);

    if (isFile) {
        const newPath = fullPath.slice(0, fullPath.lastIndexOf('\\'));
        fs.rename(fullPath, path.join(newPath, newFileName), err => {
            if (err) console.error('FS operation failed!');
        })
    } else {
        console.error('File is not exist!');
    }
}
