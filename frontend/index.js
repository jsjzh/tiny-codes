const worker = new Worker("./work.js");
const workerEmitter = new WorkerEmitter(worker);

const $upload = document.querySelector("#upload");

const handleUpload = async (e) => {
  const files = Array.from(e.target.files);

  const chunkSize = 50 * unitMaps.KB;
  // const chunkSize = 20 * unitMaps.MB;

  const dealFiles = files.map((file) => ({
    name: file.name || "裤裆.gif",
    lastModified: file.lastModified,
    size: file.size,
    type: file.type,
    chunks: fileSlice(file, chunkSize),
  }));

  // 大文件等待的时间过长，promise 只有一次回调，无法获取进度条
  // 如果需要进度条，得用 callback 来做
  // const data = await workerEmitter.promise("createMD5", { dealFiles });
  // console.log(data);

  const handleProcess = ({ name, count, totalCount }) => {
    console.log(
      `${name} 文件，一共有 ${totalCount} 个 chunk 要处理，已经处理到 ${count}，还剩 ${
        totalCount - count
      }`
    );
  };

  const handleDone = async ({ dealFiles }) => {
    workerEmitter.remove("createBigFileMD5_PROCESS", handleProcess);
    workerEmitter.remove("createBigFileMD5_DONE", handleDone);

    for (let index = 0; index < dealFiles.length; index++) {
      const dealFile = dealFiles[index];
      dealFile.formDatas = [];

      for (let i = 0; i < dealFile.chunks.length; i++) {
        const { count, chunk, chunkMD5 } = dealFile.chunks[i];
        const formData = new FormData();
        formData.append("name", dealFile.name);
        formData.append("fileMD5", dealFile.fileMD5);

        formData.append("count", count);
        formData.append("chunkMD5", chunkMD5);
        formData.append("chunkSize", chunkSize);
        formData.append("chunk", chunk);
        dealFile.formDatas.push(formData);
      }

      // TODO 这里有问题，不能够限制 promise 的并发数
      // 并且，promise 的并发数，应该是
      // 一开始 x 个执行，每当执行完一个，就会插入下一个 promise
      // 然后保证最终的并发数不大于 x 个
      const promiseFns = dealFile.formDatas.map(
        (formData) => () => upload(formData)
      );
      // 这个传入的函数不应该是 promises
      // 应该传入 () => Promsie<any>
      // 也就是调用一个函数就可以发起请求的方式
      // 这个时候就可以从 limitPromises 来做处理了
      await splitPromises(promiseFns, 2);

      /**
       * 1.
       * 对一种接口直接限制并发
       * 就是说传入一个接口，然后也是返回一个接口
       * 调用这个接口的时候会去查询这个接口是否有还未返回的请求，限制这个的并发
       * 2.
       * 传入一个数组，数组里面是一个个函数
       * 然后限制这些函数的并发
       */

      console.log(
        `${dealFile.name} 文件上传完成，一共上传了 ${dealFile.chunks.length} 块 chunk`
      );

      await merge({ name: dealFile.name, fileMD5: dealFile.fileMD5 });

      console.log(`${dealFile.name} 文件合并完成`);
    }
  };

  workerEmitter.emit("createBigFileMD5_START", { dealFiles });
  workerEmitter.on("createBigFileMD5_PROCESS", handleProcess);
  workerEmitter.on("createBigFileMD5_DONE", handleDone);
};

$upload.addEventListener("change", handleUpload);

demo("裆");

// const { code, encode, mime } = parseDataURI(
//   "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
// );
// let bstr = atob(code);
// let n = bstr.length;
// let u8arr = new Uint8Array(n);
// while (n--) u8arr[n] = bstr.codePointAt(n);
// const result = new Blob([u8arr], { type: mime });

// handleUpload({
//   target: {
//     files: [result],
//   },
// });
