const http = require("http");
const qs = require("qs");

const server = http
  .createServer()
  .listen(7001, () => console.log("后端服务启动成功"));

server.on("request", (request, response) => {
  let body = "";
  let data = "";
  let qsParseData = "";
  let jsonParseData = "";

  request.on("data", (chunk) => (body += chunk));

  request.on("end", () => {
    console.log();
    console.log();
    console.log();

    data = body.toString("utf-8");

    console.log("------ data ------", data);

    try {
      qsParseData = qs.parse(data);
      console.log("------ qs parse data ------", qsParseData);
    } catch (error) {
      console.log("------ qs parse error ------");
    }
    try {
      jsonParseData = JSON.parse(data);
      console.log("------ json parse data ------", jsonParseData);
    } catch (error) {
      console.log("------ json parse error ------");
    }

    console.log("------ end ------");

    response.writeHead(200, {
      "Access-Control-Allow-Origin": "http://127.0.0.1:3000",
      // 若前端想要使用 application/json 传输数据
      // 需要后端配置允许 Content-Type Headers
      "Access-Control-Allow-Headers": "Content-Type",
      // "Access-Control-Allow-Methods": "*",
    });

    response.end(
      JSON.stringify({
        data,
        qsParseData,
        jsonParseData,
      })
    );
  });
});
