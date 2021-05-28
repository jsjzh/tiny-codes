const worker = new Worker("./work.js");
const workerEmitter = new WorkerEmitter(worker);

const units = ["", "K", "M", "G", "T", "P", "E", "Z", "Y", "B", "N", "D"];

const unitMaps = units.reduce(
  (pre, curr, index) => ({ ...pre, [`${curr}B`]: Math.pow(1024, index) }),
  {}
);

const createAjax = (host) => {
  const request = (endPoint, data, options) => {
    const { method = "get", headers = {} } = options;
    const promise = new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open(method, `${host}${endPoint}`);

      Object.keys(headers).forEach((header) =>
        xhr.setRequestHeader(header, headers[header])
      );

      const handleError = ({ currentTarget }) => {
        console.log("handleError", currentTarget);
        reject(currentTarget);
      };

      const handleLoad = ({ currentTarget }) => {
        if (
          currentTarget.readyState === currentTarget.DONE &&
          currentTarget.status === 200
        ) {
          let result;
          try {
            result = JSON.parse(currentTarget.response);
          } catch (error) {
            resolve(currentTarget.response);
          }
          resolve(result);
          xhr.removeEventListener("load", handleLoad);
        }
      };

      const handleLoadstart = () => {
        xhr.addEventListener("load", handleLoad);
        xhr.addEventListener("error", handleError);
        xhr.addEventListener("loadend", handleLoadend);
      };

      const handleLoadend = () => {
        xhr.removeEventListener("loadstart", handleLoadstart);
        xhr.removeEventListener("load", handleLoad);
        xhr.removeEventListener("error", handleError);
        xhr.removeEventListener("loadend", handleLoadend);
      };

      xhr.addEventListener("loadstart", handleLoadstart);

      headers["Content-Type"] === "application/json"
        ? xhr.send(JSON.stringify(data))
        : xhr.send(data);

      // promise.cancel = () => xhr.abort();
    });
    return promise;
  };

  return {
    get(endPoint, data, options = {}) {
      return request(endPoint, data, {
        method: "get",
        ...options,
      });
    },

    post(
      endPoint,
      data,
      options = { headers: { "Content-Type": "application/json" } }
    ) {
      data instanceof FormData && (options = { headers: {} });

      return request(endPoint, data, { method: "post", ...options });
    },
  };
};

const fileSlice = (file, size) => {
  const chunks = [];

  let current = 0;
  let count = 1;

  while (current < file.size) {
    const chunk = file.slice(current, current + size);
    chunks.push({ count, chunk });
    current += size;
    count++;
  }

  return chunks;
};

const splitArray = (arr = [], count = 3) => {
  const result = [];

  arr.forEach((promise, index) => {
    const num = Math.floor(index / count);
    !Array.isArray(result[num]) && (result[num] = []);
    result[num].push(promise);
  });

  return result;
};

const sleep = async (timer) =>
  new Promise((resolve) => setTimeout(resolve, timer));

const splitPromises = async (promises, count) => {
  const promisesArrs = splitArray(promises, count);

  let results = [];
  for (let index = 0; index < promisesArrs.length; index++) {
    const _promises = promisesArrs[index];
    const _results = await Promise.all(_promises);
    results = [...results, ..._results];
  }

  return results;
};

const ajax = createAjax("http://localhost.charlesproxy.com:7001");

const upload = (formData) => ajax.post("/upload", formData);

const merge = ({ name, fileMD5 }) => ajax.post("/merge", { name, fileMD5 });

const $upload = document.querySelector("#upload");

const handleUpload = async (e) => {
  const files = Array.from(e.target.files);

  const chunkSize = 50 * unitMaps.KB;
  // const chunkSize = 20 * unitMaps.MB;

  const dealFiles = files.map((file) => ({
    name: file.name,
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
      const promises = dealFile.formDatas.map(upload);
      const results = await splitPromises(promises, 2);

      console.log(results);

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
