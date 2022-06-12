import * as readline from "node:readline";
import * as path from "path";
import * as os from "os";
import { stdin as input, stdout as output } from "node:process";

import {
  getName,
  sayGoodbye,
  readTheFile,
  copyTheFile,
  moveTheFile,
  createNewFile,
  renameTheFile,
  deleteTheFile,
  showCurrentDir,
  getHomeDirectory,
  showDirectoryContains,
  changeCurrentDirectory,
} from "./modules/index.js";

import {
  showArcitecture,
  showUsername,
  showHomedir,
  showCpus,
  showEOL,
} from "./modules/os/index.js";
import { calcHash } from "./modules/hash/calculateHash.js";
import { compressFile } from "./modules/zip/compress.js";
import { decompressFile } from "./modules/zip/decompress.js";

const rl = readline.createInterface({ input, output });

function start() {
  os.homedir();
  const name = getName(process.argv);
  const homeDirectory = getHomeDirectory();
  let currentPath = homeDirectory;

  process.stdout.write(`Welcome to the File Manager, ${name}!\n`);
  showCurrentDir(currentPath);

  rl.on("line", async (input) => {
    const command = input.split(" ");
    switch (command[0]) {
      case ".exit":
        sayGoodbye(rl, name);
        break;
      case "up":
        currentPath = changeCurrentDirectory(currentPath, command[0]);
        showCurrentDir(currentPath);
        break;
      case "cd":
        if (command[1]) {
          currentPath = changeCurrentDirectory(
            currentPath,
            command[0],
            command[1]
          );
        } else {
          console.error("Invalid input");
        }       
        showCurrentDir(currentPath);
        break;
      case "ls":
        showDirectoryContains(currentPath);
        break;
      case "cat":
        if (command[1]) {
          await readTheFile(currentPath, command[1]);
        } else {
          console.error("Invalid input");
        }
        showCurrentDir(currentPath);
        break;
      case "add":
        if (command[1]) {
          await createNewFile(currentPath, command[1]);
        } else {
          console.error("Invalid input");
        }        
        showCurrentDir(currentPath);
        break;
      case "rn":
        if (command[1] === undefined || command[2] === undefined) {
          console.error("Invalid input");
        } else {
          renameTheFile(currentPath, command[1], command[2]);
        }       
        showCurrentDir(currentPath);
        break;
      case "cp":
        if (command[1] === undefined || command[2] === undefined) {
          console.error("Invalid input");
        } else {
          copyTheFile(currentPath, command[1], command[2]);
        }       
        showCurrentDir(currentPath);
        break;
      case "mv":
        if (command[1] === undefined || command[2] === undefined) {
          console.error("Invalid input");      
        } else {
          moveTheFile(currentPath, command[1], command[2]);
        }        
        showCurrentDir(currentPath);
        break;
      case "rm":
        if (command[1]) {
          deleteTheFile(currentPath, command[1]);
        } else {
          console.error("Invalid input");
        }      
        showCurrentDir(currentPath);
        break;
      case "os":
        if (command[1] === "--architecture") {
          showArcitecture();
        } else if (command[1] === "--username") {
          showUsername();
        } else if (command[1] === "--EOL") {
          showEOL();
        } else if (command[1] === "--cpus") {
          showCpus();
        } else if (command[1] === "--homedir") {
          showHomedir();
        } else {
          console.error("Invalid input");
        }
        showCurrentDir(currentPath);
        break;
      case "hash":
        if (command[1]) {
          calcHash(currentPath, command[1]);
        } else {
          console.error("Invalid input");
        }      
        showCurrentDir(currentPath);
        break;
      case "compress":
        if (command[1] === undefined || command[2] === undefined) {
          console.error("Invalid input");
          break;
        } else {
          await compressFile(currentPath, command[1], command[2]);
          showCurrentDir(currentPath);
          break;
        }
      case "decompress":
        if (command[1] === undefined || command[2] === undefined) {
          console.error("Invalid input");
          break;
        } else {
          await decompressFile(currentPath, command[1], command[2]);
          showCurrentDir(currentPath);
          break;
        }
      default:
        process.stdout.write("Invalid input" + "\n");
        showCurrentDir(currentPath);
        break;
    }
  });
  rl.on("SIGINT", () => {
    sayGoodbye(rl, name);
  });
}

start();
