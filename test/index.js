Promise.defer = Promise.deferred = function () {
  const dfd = {};

  dfd.promise = new Promise((resolve, reject) => {
    dfd.resolve = resolve;
    dfd.reject = reject;
  });

  return dfd;
};

module.exports = Promise;
