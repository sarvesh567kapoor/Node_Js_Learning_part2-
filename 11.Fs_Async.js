const { readFile, writeFile } = require("fs");
console.log("start");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/secound.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const secound = result;

    writeFile(
      "./content/result-async.txt",
      `Here is the Result ${first}, ${secound}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
        console.log("done with thw task");
      }
    );
  });
});

console.log("starting next task");
