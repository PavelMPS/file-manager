import * as os from "os";

export function showCpus() {
  const newArr = [];
  os.cpus().map((cpu) => {
    const model = cpu.model;
    const cpuSpeed = `${cpu.speed / 1000} GHz`;
    const cpuInfo = { model, cpuSpeed };
    newArr.push(cpuInfo);
  });
  console.log(newArr);
}
