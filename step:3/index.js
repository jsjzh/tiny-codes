window.addEventListener(
  "error",
  (sourceErrorEvent) => {
    const targetElement =
      sourceErrorEvent.target || sourceErrorEvent.srcElement;
    const url = targetElement.src || targetElement.href;

    console.log("sourceError: ", url);
  },
  true
);
