const http = require("http"); // importing files way

// ("http") http is global module

// function rqListener(req, res) {}

const server = http.createServer((req, res) => {
  console.log("Hrishikesh Joshi");
  //   console.log(req);
  //   process.exit();
});

server.listen(4000);
