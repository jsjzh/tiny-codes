// base64 转 blob
const dataURItoBlob = (dataURI) => {
  // convert base64/URLEncoded data component to raw binary data held in a string
  let byteString;
  if (dataURI.split(",")[0].indexOf("base64") >= 0) {
    byteString = atob(dataURI.split(",")[1]);
  } else byteString = unescape(dataURI.split(",")[1]);

  // separate out the mime component
  const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

  // write the bytes of the string to a typed array
  const ia = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ia], { type: mimeString });
};

const base64 =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=";

(async () => {
  const text = await dataURItoBlob(base64).text();
  console.log(text);
})();
