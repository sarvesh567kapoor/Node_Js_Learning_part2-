const os = require("os");

// info about the current user
const user = os.userInfo();
console.log(user);

//method  returns the system uptime in secounds
const time = os.uptime();
console.log(`The System Uptime is ${time} secounds`);

//About the  operating system we are using
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
