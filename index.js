// window.Qs from BootCDN
const qs = window.Qs;

const info = {
  name: "king",
  age: 18,
  isAdmain: true,
  groups: [1, 2, 3],
  address: "",
  foo: null,
  bar: undefined,
  extra: { wechat: "kimimi_king", qq: 454075623 },
};

// const from = new FormData();

// for (const key in info) {
//   if (info.hasOwnProperty(key)) from.append(key, info[key]);
// }

function ajax(url, data, headers, type = "unknown") {
  const request = new XMLHttpRequest();

  const currentUrl = `${url}?type=${type}&header=${
    headers["Content-Type"] || "unknown"
  }`;

  request.open("POST", currentUrl, true);

  for (const header in headers) {
    if (headers.hasOwnProperty(header)) {
      const value = headers[header];
      request.setRequestHeader(header, value);
    }
  }

  request.send(data);
}

const url = "http://127.0.0.1:7001/filter";

const contentTypeFromUrl = {
  "Content-Type": "application/x-www-form-urlencoded",
};
const contentTypeJson = { "Content-Type": "application/json" };

const contentTypeFormData = { "Content-Type": "multipart/form-data" };
const contentTypeTextPlain = { "Content-Type": "text/plain" };

ajax(url, qs.stringify(info), contentTypeFromUrl, "qs");
ajax(url, qs.stringify(info), contentTypeJson, "qs");
// ajax(url, qs.stringify(info), contentTypeFormData, "qs");
// ajax(url, qs.stringify(info), contentTypeTextPlain, "qs");

ajax(url, JSON.stringify(info), contentTypeFromUrl, "json");
ajax(url, JSON.stringify(info), contentTypeJson, "json");
// ajax(url, JSON.stringify(info), contentTypeFormData, "json");
// ajax(url, JSON.stringify(info), contentTypeTextPlain, "json");

// ajax(url, info, contentTypeFromUrl, "base");
// ajax(url, info, contentTypeJson, "base");
// ajax(url, info, contentTypeFormData, "base");
// ajax(url, info, contentTypeTextPlain, "base");

// ajax(url, from, contentTypeFromUrl);
// ajax(url, from, contentTypeJson);
// ajax(url, from, contentTypeFormData);
// ajax(url, from, contentTypeTextPlain);
