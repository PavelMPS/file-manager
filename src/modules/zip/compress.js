import * as fs from "fs";
import * as path from "path";
import * as zlib from "zlib";

export async function compressFile(currentPath, pathToFile, destination) {
  const pathToSourceFile = path.isAbsolute(pathToFile)
    ? pathToFile
    : path.join(currentPath, pathToFile);
    if (fs.existsSync(pathToSourceFile)) {
        const pathToDestination = path.isAbsolute(destination)
        ? destination
        : path.join(currentPath, destination);
        if (fs.existsSync(pathToDestination)) {
            const compressingFile =
            pathToSourceFile.slice(pathToSourceFile.lastIndexOf("\\") + 1) + ".br";
        
          const rs = fs.createReadStream(pathToSourceFile);
          const ws = fs.createWriteStream(
            path.join(pathToDestination, compressingFile)
          );
        
          const brotli = zlib.createBrotliCompress();
        
          const stream = rs.pipe(brotli).pipe(ws);
        
          stream.on("finish", (err) => {
            if (err) {
                console.error('Compress operation failed!');
            }
          });
        } else {
            console.error('Destination folder is not exist!');
        }
      
    } else {
        console.error('File is not exist!');
    }
  
}
