const http = require("http");
const multiparty = require("multiparty");
const fs = require("fs");

const server = http.createServer().listen(7001, () => {
  console.log("后端服务创建成功");
});

server.on("request", (request, response) => {
  if (request.url === "/upload") {
    response.setHeader(
      "Access-Control-Allow-Origin",
      "http://localhost.charlesproxy.com:8080"
    );
    response.setHeader("Access-Control-Allow-Headers", "*");

    if (request.method === "OPTIONS") {
      response.writeHead(200).end();
    }

    if (request.method === "POST") {
      // const writeStream = fs.createWriteStream(
      //   "/Users/dasouche/Desktop/PROJECT/git/tiny-codes/data/images.png",
      //   { flags: "wx" }
      // );
      // request.pipe(writeStream);
      // request.on("end", () => {
      //   writeStream.end();
      //   response.end("success");
      //   // request.resume();
      // });
      var form = new multiparty.Form();

      form.parse(request, function (err, fields, files) {
        response.writeHead(200, { "content-type": "application/json" });
        response.end(JSON.stringify({ fields: fields, files: files }));
      });
    }
  }

  // if (request.url === "/upload") {
  //   if (request.method === "OPTIONS") {
  //     response.writeHead(200);
  //     response.end();
  //   } else if (request.method === "POST") {
  //     response.end("POST");

  //     // let rawData = "";
  //     // request.on("data", (chunk) => {
  //     //   rawData += chunk;
  //     // });
  //     // request.on("end", () => {
  //     //   response.end("rawData");
  //     // });
  //   } else {
  //     response.end("error");
  //   }
  //   // var form = new multiparty.Form();
  //   // form.parse(request, function (err, fields, files) {
  //   //   response.writeHead(200, { "content-type": "text/plain" });
  //   //   response.write("received upload:\n\n");
  //   //   response.end(JSON.stringify({ fields: fields, files: files }));
  //   // });
  // } else {
  //   console.log("request", request);
  //   console.log("response", response);
  //   response.end("hello world");
  // }
});
