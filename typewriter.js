const message = "May the force be with you.";
const typer = (message, delay) => {
  let times = 1;
  for (const char of message) {
    setTimeout(() => {
      process.stdout.write(char);
    }, times * delay);
    times++;
  }
  setTimeout(() => {
    process.stdout.write("\n");
  }, times * delay);
};

typer(message, 50);

