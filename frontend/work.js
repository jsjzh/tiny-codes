self.importScripts(
  "https://cdn.bootcdn.net/ajax/libs/spark-md5/3.0.0/spark-md5.min.js"
);
self.importScripts("./workerEmitter.js");

const SparkMD5 = self.SparkMD5;
const workerEmitter = new WorkerEmitter(self);

workerEmitter.onPromise("createMD5", async ({ dealFiles }) => {
  for (let index = 0; index < dealFiles.length; index++) {
    const dealFile = dealFiles[index];
    const spark = new SparkMD5.ArrayBuffer();

    for (let i = 0; i < dealFile.chunks.length; i++) {
      const { chunk } = dealFile.chunks[i];
      const chunkArrayBuffer = await chunk.arrayBuffer();
      spark.append(chunkArrayBuffer);
    }

    dealFile.fileMD5 = spark.end();
  }

  return new Promise((resolve) => resolve(dealFiles));
});

workerEmitter.on("createBigFileMD5_START", async ({ dealFiles }) => {
  for (let index = 0; index < dealFiles.length; index++) {
    const dealFile = dealFiles[index];
    const spark = new SparkMD5.ArrayBuffer();

    for (let i = 0; i < dealFile.chunks.length; i++) {
      const chunkInfo = dealFile.chunks[i];
      const chunkArrayBuffer = await chunkInfo.chunk.arrayBuffer();
      const chunkSpark = new SparkMD5.ArrayBuffer();

      spark.append(chunkArrayBuffer);

      chunkSpark.append(chunkArrayBuffer);
      chunkInfo.chunkMD5 = chunkSpark.end();

      workerEmitter.emit("createBigFileMD5_PROCESS", {
        name: dealFile.name,
        count: chunkInfo.count,
        totalCount: dealFile.chunks.length,
      });
    }

    dealFile.fileMD5 = spark.end();
  }

  workerEmitter.emit("createBigFileMD5_DONE", { dealFiles });
});
