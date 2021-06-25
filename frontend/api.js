const ajax = createAjax("http://localhost.charlesproxy.com:7001");

const upload = (formData) => ajax.post("/upload", formData);

const merge = ({ name, fileMD5 }) => ajax.post("/merge", { name, fileMD5 });

const demo = (str) =>
  ajax.post("/demo", str, {
    headers: {
      "Content-Type": "text/plain; charset=ISO-8859-1",
    },
  });
