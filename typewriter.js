const sentence = "hello there from lighouse labs";
let delay = 0;
let increment = 50;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += increment;
}
