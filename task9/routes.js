const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    fs.readFile("task9.txt", { encoding: "utf-8" }, (err, data) => {
      if (err) {
        console.log(err);
      }
      console.log("data from file", data);
      res.write("<html>");
      res.write("<head><title>Enter Name</title></head>");
      res.write(`<body>${data}</body>`);
      res.write(
        '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></input></form></body>'
      );
      res.write("</html>");
      return res.end();
    });
  } else if (url === "/message" && method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split("=")[1]; // [ 'mesage', 'Hrishikesh Joshi'].  so [1].
      fs.writeFile("task9.txt", message, (err) => {
        if (err) {
          console.log(err);
        }
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First Page</title><head>");
    res.write("<body><h1>Hello from my Node.js Server!!!</h1></body>");
    res.write("</html>");
    res.end();
  }
};

// type1:
// module.exports = requestHandler;

// type2:
// module.exports = {
//   handler: requestHandler,
//   someText: "some Hardcoded text",
// };

// type3:
module.exports.handler = requestHandler;
module.exports.someText = "some Hardcoded text";
