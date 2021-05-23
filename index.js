const fs = require("fs");

const regDataURI = (dataURI) => {
  const regDataURI = /^data(\:.*?)(\;.*?)?(\,.*)$/i;

  const [, _mime, _encode, _code] = regDataURI.exec(dataURI) || [];

  return {
    mime: _mime.slice(1) || null,
    encode: _encode.slice(1) || null,
    code: _code.slice(1) || null,
  };
};

const dataURI =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=";

const saveDataURIImage = (dataURI, imagePath) => {
  const { mime, encode, code } = regDataURI(dataURI);
  var buffer = new Buffer.from(code, encode);
  fs.createWriteStream(imagePath).write(buffer);
};

saveDataURIImage(dataURI, "image.png");
