const { readFileSync, writeFileSync } = require("fs");
console.log("start");
const first = readFileSync("./content/first.txt", "utf-8");
const secound = readFileSync("./content/secound.txt", "utf-8");

console.log("reading the file is completed");
// console.log(first, secound);

//writing to a file using fs module
writeFileSync(
  "./content/third.txt",
  `Here is the Result ${first}, ${secound}`,
  { flag: "a" }
);

console.log("done with this task");
console.log("starting the next one");
