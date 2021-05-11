const qs = require("querystring");
const qs2 = require("qs");

const obj = {
  name: "king",
  age: 18,
  foos: [1, 2, 3, 4, 5],
  bars: [
    { name: 123, age: 321 },
    { name: 123, age: 321 },
  ],
};

const foo = qs.stringify(obj);
const bar = qs2.stringify(obj);

console.log(foo);
console.log(bar);

console.log(qs.parse(foo));
console.log(qs.parse(bar));

console.log(qs2.parse(foo));
console.log(qs2.parse(bar));

function handleSubmit(event) {
  debugger;
  // action="http://127.0.0.1:7001/filter?key=data"

  console.log("object");
  event.preventDefault();
}

function ajax(url) {
  const request = new XMLHttpRequest();
  request.onreadystatechange = () => {
    console.log(request);
  };
  request.open("POST", url, true);
  request.withCredentials = true;
  // request.setRequestHeader("Content-Type", "application/json");
  // request.setRequestHeader("Content-Type", "multipart/form-data");
  // request.setRequestHeader("Content-Type", "text/plain");
  request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  // request.setRequestHeader("SELF-HEADER", "hello");
  const from = new FormData();
  // from.append("name", "king");
  // request.send(from);
  // request.send(JSON.stringify({ name: "king", age: 18, demo: 123 }));
  request.send("user=username&pass=password");
}

ajax("http://localhost.charlesproxy.com:7001/filter?key=data");
