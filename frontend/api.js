const ajax = createAjax("http://127.0.0.1:7001");

const upload = (formData) => ajax.post("/upload", formData);

const merge = ({ name, fileMD5 }) => ajax.post("/merge", { name, fileMD5 });
