import * as fs from "fs";
import * as path from "path";

export async function copyTheFile(currentPath, pathToFile, newDirectoryPath) {
    const source = path.isAbsolute(pathToFile) ? pathToFile : path.join(currentPath, pathToFile);
    const destination = path.isAbsolute(newDirectoryPath) ? newDirectoryPath : path.join(currentPath, newDirectoryPath);
    const fileToCopy = source.slice(source.lastIndexOf('\\') + 1);

    if (fs.existsSync(source)) {
        if (fs.existsSync(destination)) {
            fs.copyFile(source, path.join(destination, fileToCopy), err => {
                if (err) {
                    console.error('FS operation failed');
                }
            })
        } else {
            console.error('Folder of destination do not exist!');
        }
    } else {
        console.error('File do not exist!');
    }
}
