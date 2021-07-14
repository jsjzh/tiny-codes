// 可以实现异步的promise
class MyPromise {
  constructor(fn) {
    this.state = 'pending';
    this.value = undefined;
    this.reason = undefined;
    // 成功存放的数组
    this.onResolvedCallbacks = [];
    // 失败存放法数组
    this.onRejectedCallbacks = [];
    let resolve = function (value) {
      if (this.state === 'pending') {
        this.state == 'fulfilled';
        this.value = value;
        // 一旦resolve执行，调用成功数组的函数
        this.onResolvedCallbacks.forEach((fn) => fn());
      }
    };
    let reject = function (reason) {
      if (this.state === 'pending') {
        this.state = 'rejected';
        this.reason = reason;
        // 一旦reject执行，调用失败数组的函数
        this.onRejectedCallbacks.forEach((fn) => fn());
      }
    };
    try {
      fn(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }
  then(onFulfilled, onRejected) {
    // 状态为fulfilled，执行onFulfilled，传入成功的值
    if (this.state === 'fulfilled') {
      onFulfilled(this.value);
    }
    // 状态为rejected，执行onRejected，传入失败的原因
    if (this.state === 'rejected') {
      onRejected(this.reason);
    }
    // 当状态state为pending时
    if (this.state === 'pending') {
      // onFulfilled传入到成功数组
      this.onResolvedCallbacks.push(() => {
        onFulfilled(this.value);
      });
      // onRejected传入到失败数组
      this.onRejectedCallbacks.push(() => {
        onRejected(this.reason);
      });
    }
  }
  catch(fn) {
    return this.then(null, fn);
  }
}
// 实现链式的promise.then
function then(onFulfilled, onRejected) {
  onFulfilled =
    typeof onFulfilled === 'function' ? onFulfilled : (value) => value;
  onRejected =
    typeof onRejected === 'function'
      ? onRejected
      : (err) => {
          throw err;
        };
  let promise2 = new Promise((resolve, reject) => {
    if (this.state === 'fulfilled') {
      setTimeout(() => {
        try {
          let x = onFulfilled(this.value);
          resolvePromise(promise2, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      }, 0);
    }
    if (this.state === 'rejected') {
      setTimeout(() => {
        try {
          let x = onRejected(this.reason);
          resolvePromise(promise2, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      }, 0);
    }
    if (this.state === 'pending') {
      this.onResolvedCallbacks.push(() => {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0);
      });
      this.onRejectedCallbacks.push(() => {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0);
      });
    }
  });
  return promise2;
}

// promiseALL方法
// 返回结果是数组,顺序和传参顺序一样
function promiseAll(_promises) {
  return new Promise((resolve, reject) => {
    // Iterable => Array
    const promises = Array.from(_promises);
    // 结果用一个数组维护
    const resultArr = [];
    // 要维护一个 count，因为需要匹配返回的 promise 个数
    let count = 0;
    for (let i = 0; i < promises.length; i++) {
      // Promise.resolve 确保把所有数据都转化为 Promise
      Promise.resolve(promises[i])
        .then((result) => {
          // 因为 promise 是异步的，保持数组一一对应
          resultArr[i] = result;
          // 如果数组中所有 promise 都完成，则返回结果数组
          if (++count === promises.length) resolve(resultArr);
          // 当发生异常时，直接 reject
        })
        .catch((e) => reject(e));
    }
  });
}

// promiseRace方法
// 只返回最快的结果
function promiseRace(promises) {
  if (!Array.isArray(promises)) {
    throw new Error('不是数组');
  }
  return new Promise(function (resolve, reject) {
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(
        function (value) {
          return resolve(value);
        },
        function (reason) {
          return reject(reason);
        },
      );
    }
  });
}

MyPromise.deferred = function () {
  var result = {};

  result.promise = new MyPromise(function (resolve, reject) {
    result.resolve = resolve;
    result.reject = reject;
  });

  return result;
};

module.exports = MyPromise;
