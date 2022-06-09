export function sayGoodbye(rl, name) {
    process.stdout.write(`Thank you for using File Manager, ${name}!`);
    rl.close();
}
