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

      const handleProcess = function (event) {
        console.log("handleProcess", event);
        console.log(event);
        if (event.lengthComputable) {
          var percentComplete = (event.loaded / event.total) * 100;
          console.log(percentComplete);
        } else {
          // 总大小未知时不能计算进程信息
        }
      };

      const handleLoadstart = () => {
        xhr.addEventListener("load", handleLoad);
        xhr.addEventListener("error", handleError);
        xhr.addEventListener("loadend", handleLoadend);
        xhr.addEventListener("progress", handleProcess);
      };

      const handleLoadend = () => {
        xhr.removeEventListener("loadstart", handleLoadstart);
        xhr.removeEventListener("load", handleLoad);
        xhr.removeEventListener("error", handleError);
        xhr.removeEventListener("loadend", handleLoadend);
        xhr.removeEventListener("progress", handleProcess);
      };

      xhr.addEventListener("loadstart", handleLoadstart);

      xhr.open(method, `${host}${endPoint}`);

      Object.keys(headers).forEach((header) =>
        xhr.setRequestHeader(header, headers[header])
      );

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

const sleep = async (timer) =>
  new Promise((resolve) => setTimeout(resolve, timer));

const splitArray = (arr = [], count = 3) => {
  const result = [];

  arr.forEach((promise, index) => {
    const num = Math.floor(index / count);
    !Array.isArray(result[num]) && (result[num] = []);
    result[num].push(promise);
  });

  return result;
};

const splitPromises = async (promises, count) => {
  const promisesFnArrs = splitArray(promises, count);

  let results = [];
  for (let index = 0; index < promisesFnArrs.length; index++) {
    const promiseFns = promisesFnArrs[index];
    const _results = await Promise.all(
      promiseFns.map((promiseFn) => promiseFn())
    );
    results = results.concat(_results);
  }

  return results;
};

const parseDataURI = (dataURI) => {
  const dataURIReg = /^data(\:.*?)(\;.*?)?(\,.*)$/i;

  const [, _mime, _encode, _code] = dataURIReg.exec(dataURI) || [];

  return {
    mime: _mime.slice(1) || null,
    encode: _encode.slice(1) || null,
    code: _code.slice(1) || null,
  };
};
