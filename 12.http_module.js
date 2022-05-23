const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    res.write("Welcome to the home\n");
  } else if (req.url === "/about") {
    res.write("Welcome to the about\n");
  } else {
    res.end(`<h1>Oops!</h1><p>Page Do not exist</p>`);
  }
  res.write("hello to the http module");
  res.end();
});

server.listen(5000);
