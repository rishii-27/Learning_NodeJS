const http = require("http");

const server = http.createServer((req, res) => {
  //   console.log(req.url, req.method, req.headers);

  const url = req.url;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>Hello From server</h1></body>");
    res.write("</html>");
    res.end();
  }
  if (url === "/home") {
    res.write("<html>");
    res.write("<head><title>Home</title></head>");
    res.write("<body><h1>This is Home Page</h1></body>");
    res.write("</html>");
    res.end();
  } else if (url === "/about") {
    res.write("<html>");
    res.write("<head><title>About</title></head>");
    res.write("<body><h1>This is About Page</h1></body>");
    res.write("</html>");
    res.end();
  } else if (url === "/node") {
    res.write("<html>");
    res.write("<head><title>Node</title></head>");
    res.write("<body><h1>This is Node Page</h1></body>");
    res.write("</html>");
    res.end();
  }

  //   res.setHeader("Content-Type", "text/html");
});

server.listen(4000);

// Node.js listens for things to happen in your code, like requests coming in or files being read. When something happens, it triggers a function to handle it.
// Node.js handles lots of requests quickly because it doesn't wait around. It can juggle many tasks at once using non-blocking method, making it great for handling lots of requests at the same time.
// process.exit stops your Node.js program immediately. It's like hitting the emergency stop button. You use it when you want your program to end right away.
// req.url is the page or resource the client wants. req.headers are extra details sent by the client, like browser info. req.method is what the client wants to do, like GET for getting data or POST for sending data.
