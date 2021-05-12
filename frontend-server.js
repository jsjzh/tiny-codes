const http = require("http");
const fs = require("fs");

const server = http
  .createServer()
  .listen(3000, () => console.log("前端服务启动成功"));

server.on("request", (request, response) => {
  if (request.url === "/") {
    fs.readFile("./index.html", (error, data) => {
      if (error) throw error;
      response.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
      response.write(data.toString("utf8"));
      response.end();
    });
  }

  if (request.url === "/index.js") {
    fs.readFile("./index.js", (error, data) => {
      if (error) throw error;
      response.writeHead(200, {
        "Content-Type": "text/javascript;charset=utf-8",
      });
      response.write(data.toString("utf8"));
      response.end();
    });
  }
});
