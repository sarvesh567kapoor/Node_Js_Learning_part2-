//CommonJS, every file is module (by default)
// import os from "os";
// Modules Encapsulate Code (only share minimum)
const names = require("./4.names");
const sayhi = require("./5.utils");
const alternative = require("./6.alternative");
require("./7.mind-greanade");
console.log(module);

console.log(names);
console.log(alternative);
sayhi("susan");
sayhi(names.john);
for (const name in names) {
  sayhi(name);
}
