const ajax = (url, method = "post", data, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url, true);
  // Object.keys(headers).forEach((key) =>
  //   xhr.setRequestHeader(key, headers[key])
  // );
  // xhr.setRequestHeader("Content-Type", "text/plain");
  xhr.send(data);
  xhr.onreadystatechange = function () {
    console.log(xhr.responseText);
  };
  // xhr.onload = (e) => callback({ response: e.target.response });
};

const $upload = document.querySelector("#upload");

$upload.addEventListener("change", (e) => {
  const [file] = e.target.files;
  const formData = new FormData();
  formData.append("chunk", file);
  ajax(
    "http://localhost.charlesproxy.com:7001/upload",
    "post",
    formData,
    (rep) => {
      console.log(rep);
    }
  );

  // const files = e.target.files;
  // console.log(files);
  // const formDatas = [];
  // let len = files.length;
  // while (len--) {
  //   const formData = new FormData();
  //   const item = files.item(len);
  //   formData.append("chunk", item.slice(0, item.size));
  //   formData.append("name", item.name);
  //   formDatas.push(formData);
  // }
  // console.log(formDatas);
  // ajax("http://127.0.0.1:7001/upload", "post", formDatas[0], (rep) => {
  //   console.log(rep);
  // });
});
