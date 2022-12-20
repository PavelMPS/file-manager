export function getName(argument) {
  const args = argument.slice(2);
  const username = args[0].slice(args[0].indexOf("=") + 1);
  return username;
}
