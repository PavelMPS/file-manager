import * as fs from "fs";
import * as path from "path";
import * as crypto from "crypto";

export async function calcHash(currentPath, pathToFile) {
  const pathToHashingFile = path.isAbsolute(pathToFile)
    ? pathToFile
    : path.join(currentPath, pathToFile);

  if (fs.existsSync(pathToHashingFile)) {
    const rs = fs.createReadStream(pathToHashingFile, "utf-8");
    rs.on("data", (chunk) => {
      const hash = crypto.createHash("sha256").update(chunk).digest("hex");
      process.stdout.write(hash);
    });
  } else {
    console.error("File is not exist!");
  }
}
