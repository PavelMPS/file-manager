import * as os from "node:os";

export function getHomeDirectory() {
  const homeDirectory = os.homedir();
  return homeDirectory;
}
