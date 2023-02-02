const http = require("http");
const multiparty = require("multiparty");
const fs = require("fs-extra");
const path = require("path");

const fileChunksSavePath = path.join(__dirname, "../data");
const fileChunksMergePath = path.join(__dirname, "../merge");

const server = http.createServer().listen(7001, () => {
  console.log("后端服务创建成功");
});

server.on("request", async (request, response) => {
  if (request.url === "/demo") {
    response.setHeader(
      "Access-Control-Allow-Origin",
      "http://127.0.0.1:8080"
    );
    response.setHeader("Access-Control-Allow-Headers", "*");
    response.writeHead(200, { "content-type": "text/plain; charset=utf-8" });

    let data = "";
    request.on("data", (body) => {
      data += body;
    });

    request.on("end", async () => {
      response.end(data);
    });
  }

  if (request.url === "/upload") {
    response.setHeader(
      "Access-Control-Allow-Origin",
      "http://127.0.0.1:8080"
    );
    response.setHeader("Access-Control-Allow-Headers", "*");

    if (request.method === "OPTIONS") {
      response.writeHead(200).end();
    }

    if (request.method === "POST") {
      var form = new multiparty.Form();

      form.parse(request, function (err, fields, files) {
        const {
          name: [name],
          fileMD5: [fileMD5],

          count: [count],
          chunkMD5: [chunkMD5],
          chunkSize: [chunkSize],
        } = fields;

        const {
          chunk: [chunk],
        } = files;

        const { ext } = path.parse(name);

        const filePath = path.join(
          fileChunksSavePath,
          `${fileMD5}-${ext}/${chunkMD5}-${count}-${chunkSize}`
        );
        if (!fs.existsSync(filePath)) fs.moveSync(chunk.path, filePath);

        response.writeHead(200, { "content-type": "application/json" });
        response.end(JSON.stringify({ fields: fields, files: files }));
      });
    }
  }

  if (request.url === "/merge") {
    response.setHeader(
      "Access-Control-Allow-Origin",
      "http://127.0.0.1:8080"
    );
    response.setHeader("Access-Control-Allow-Headers", "*");

    if (request.method === "OPTIONS") {
      response.writeHead(200).end();
    }

    if (request.method === "POST") {
      let data = "";
      request.on("data", (body) => {
        data += body;
      });

      request.on("end", async () => {
        const { name, fileMD5 } = JSON.parse(data);
        const { ext } = path.parse(name);

        const dirPath = path.join(fileChunksSavePath, `${fileMD5}-${ext}`);
        const fileStat = await fs.stat(dirPath);

        if (!fileStat.isDirectory) {
          response.writeHead(400, { "content-type": "application/json" });
          response.end(
            JSON.stringify({
              success: false,
              message: "不存在的文件",
              data,
            })
          );
        }

        const files = await fs.readdir(dirPath);

        const resultFilePath = path.join(
          fileChunksMergePath,
          `${fileMD5}${ext}`
        );
        await fs.ensureFile(resultFilePath);

        const promises = files.map((file) => {
          return new Promise((resolve) => {
            const [, count, chunkSize] = file.split("-");
            const rs = fs.createReadStream(path.join(dirPath, file));
            const ws = fs.createWriteStream(resultFilePath, {
              start: (count - 1) * chunkSize,
            });
            rs.pipe(ws);
            ws.on("finish", resolve);
          });
        });

        await Promise.all(promises);

        response.writeHead(200, { "Content-Type": "application/json" });
        response.end(
          JSON.stringify({
            success: true,
            message: "OK",
            data,
          })
        );
      });
    }
  }
});
