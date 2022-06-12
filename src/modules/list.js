import * as fs from "fs";

export function showDirectoryContains(path) {
  fs.readdir(path, (err, files) => {
    if (err) {
      console.error("This is error in showDirectoryContains!");
    }
    console.log(files);
  });
}
