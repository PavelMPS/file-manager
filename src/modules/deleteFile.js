import * as fs from "fs";
import * as path from "path";

export async function deleteTheFile(currentPath, pathToFile) {
  const pathToDelete = path.isAbsolute(pathToFile)
    ? pathToFile
    : path.join(currentPath, pathToFile);
  if (fs.existsSync(pathToDelete)) {
    fs.unlink(pathToDelete, (err) => {
      if (err) {
        console.error("FS operation failed");
      }
    });
  } else {
    console.error("File do not exist!");
  }
}
