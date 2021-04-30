const http = require("http");

const fs = require("fs");

const server = http
  .createServer()
  .listen(3000, () => console.log("服务启动成功"));

server.on("request", (request, response) => {
  // debugger;

  fs.readFile("./index.html", (error, data) => {
    if (error) throw error;

    response.setHeader("custom-header", "demo");

    response.writeHead(200, {
      "Content-Type": "text/html;charset=utf-8",
    });
    response.write(data.toString("utf8"));
    response.end();
  });
});
