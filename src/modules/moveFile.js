import { copyTheFile, deleteTheFile } from "../modules/index.js";

export async function moveTheFile(currentPath, pathToFile, newDirectoryPath) {
  await copyTheFile(currentPath, pathToFile, newDirectoryPath);
  await deleteTheFile(currentPath, pathToFile);
}
