import * as os from "os";

export function showUsername() {
  console.log(os.userInfo().username);
}
