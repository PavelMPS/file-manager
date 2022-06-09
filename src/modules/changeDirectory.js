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
      fs.access(path.join(currentDirectory, desiredDirectory), (err) => {
        if (err) {
          console.log("Operation error!");
          return currentDirectory;
        }     
      });
      const newPath = path.join(currentDirectory, desiredDirectory);
        return newPath;
    }
    default: {
      console.log("default");
    }
  }
}
