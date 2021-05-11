const http = require("http");

http
  .createServer()
  .listen(7001)
  .on("request", (request, response) => {
    // set-cookie: _security_token_inc=91616657242752866;Path=/;Domain=.souche-inc.com;Max-Age=604800

    let body = "";
    request.on("data", (chunk) => {
      console.log("data");
      body += chunk;
    });

    request.on("end", () => {
      console.log("------ end ------");
      console.log("------ body ------", body);
      const data = body.toString("utf8");
      console.log("------ data ------", data);
      console.log("------ typeof ------", typeof data);
    });

    response.setHeader("Set-Cookie", ["name=king", "age=/!@#$%^&*()18"]);
    response.writeHead(200, {
      "Access-Control-Allow-Origin": "http://localhost.charlesproxy.com:3000",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Headers": "Content-Type",
    });
    response.end("hi");
  });
