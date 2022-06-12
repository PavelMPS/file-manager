import * as path from "path";
import * as fs from "fs";

export function changeCurrentDirectory(
  currentDirectory,
  action,
  desiredDirectory
) {
 
  switch (action) {
    case "up": {
      const newPath = path.join(currentDirectory, "..");
      return newPath;
    }
    case "cd": {
      const isFolder = fs.existsSync(path.join(currentDirectory, desiredDirectory));
      if (isFolder) {
        const pathToDir = path.join(currentDirectory, desiredDirectory);
        return pathToDir;
      } else {
        console.error('Folder is not exist!');
        return currentDirectory;
      }     
    }
    default: {
      console.log("default");
    }
  }
}
