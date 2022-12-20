import * as os from "os";

export function showEOL() {
  const EOL = os.EOL;
  console.log(JSON.stringify(EOL));
}
