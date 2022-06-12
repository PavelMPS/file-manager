import * as os from "os";

export function showCpus() {
  const newArr = [];
  os.cpus().map((cpu) => {
    const model = cpu.model;
    const speed = cpu.speed.toString();
    let cpuSpeed;
    cpuSpeed = `${speed.slice(0, 1)},${speed.slice(1)} GHz`;
    const cpuInfo = { model, cpuSpeed };
    newArr.push(cpuInfo);
  });
  console.log(newArr);
}
