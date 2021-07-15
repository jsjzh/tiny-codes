// https://www.cnblogs.com/xinggood/p/11836096.html#_nav_8

const PENDING = 'pending';
const RESOLVED = 'fulFilled';
const REJECTED = 'rejected';

const isFunction = (value) => typeof value === 'function';

const resolvePromise = (promise2, x, resolve, reject) => {
  // x 和 promise2 不能是同一个，如果是同一个就报错
  // 加一个开关，防止多次调用失败和成功，跟 pending 状态值一样的逻辑一样,走了失败就不能走成功了，走了成功一定不能在走失败
  if (promise2 === x) {
    return reject(
      new TypeError('Chaining cycle detected for promise #<promise>'),
    );
  }
  // 判断如果 x 是否是一个对象，判断函数是否是对象的方法有：typeof instanceof constructor toString
  if ((typeof x === 'object' && x != null) || typeof x === 'function') {
    let called;
    try {
      // 预防取.then 的时候错误
      let then = x.then; // Object.definePropertype
      if (typeof then === 'function') {
        // 用 then.call()为了避免在使用一次 x.then 报错
        then.call(
          x,
          (y) => {
            // resolve(y)// 采用 promise 的成功结果，并且向下传递
            if (called) {
              return;
            }
            called = true;
            // y 有可能是一个 promise，那么我们就要继续使用回调函数,直到解析出来的值是一个普通值
            resolvePromise(promise2, y, resolve, reject);
          },
          (r) => {
            if (called) {
              return;
            }
            called = true;
            reject(r); // 采用 promise 的失败结果，并且向下传递
          },
        );
      } else {
        if (called) {
          return;
        }
        called = true;
        resolve(x); // x 不是一个函数，是一个对象
      }
    } catch (err) {
      if (called) {
        return;
      }
      called = true;
      reject(err);
    }
  } else {
    // x 是一个普通值
    resolve(x);
  }
};
class MyPromise {
  constructor(executor) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];

    // 成功
    let resolve = (value) => {
      // pending 最屏蔽的，resolve 和 reject 只能调用一个，不能同时调用，这就是 pending 的作用
      if (this.status == PENDING) {
        this.status = RESOLVED;
        this.value = value;
        // 发布执行函数
        this.onResolvedCallbacks.length &&
          this.onResolvedCallbacks.forEach((fn) => fn());
      }
    };

    // 失败
    let reject = (reason) => {
      if (this.status == PENDING) {
        this.status = REJECTED;
        this.reason = reason;
        this.onRejectedCallbacks.length &&
          this.onRejectedCallbacks.forEach((fn) => fn());
      }
    };
    try {
      // 执行函数
      executor(resolve, reject);
    } catch (err) {
      // 失败则直接执行 reject 函数
      reject(err);
    }
  }

  then(onFulFilled, onRejected) {
    // onfulfilled, onrejected 都是可选参数
    onFulFilled = isFunction(onFulFilled) ? onFulFilled : (data) => data;
    onRejected = isFunction(onRejected)
      ? onRejected
      : (err) => {
          throw err;
        };
    let promise2 = new MyPromise((resolve, reject) => {
      // 箭头函数，无论 this 一直是指向最外层的对象
      // 同步
      if (this.status == RESOLVED) {
        const timer = setTimeout(() => {
          try {
            let x = onFulFilled(this.value);
            // 添加一个 resolvePromise() 的方法来判断 x 跟 promise2 的状态，决定 promise2 是走成功还是失败
            resolvePromise(promise2, x, resolve, reject);
          } catch (err) {
            // 中间任何一个环节报错都要走 reject()
            reject(err);
          }
          clearTimeout(timer);
        }, 0); // 同步无法使用 promise2，所以借用 setiTimeout 异步的方式
        // MDN 0>=4ms
      }
      if (this.status == REJECTED) {
        const timer = setTimeout(() => {
          try {
            let x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (err) {
            // 中间任何一个环节报错都要走 reject()
            reject(err);
          }
          clearTimeout(timer);
        }, 0); // 同步无法使用 promise2，所以借用 setiTimeout 异步的方式
      }
      // 异步
      if (this.status == PENDING) {
        // 在 pending 状态的时候先订阅
        this.onResolvedCallbacks.push(() => {
          // todo
          const timer = setTimeout(() => {
            try {
              let x = onFulFilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (err) {
              // 中间任何一个环节报错都要走 reject()
              reject(err);
            }
            clearTimeout(timer);
          }, 0); // 同步无法使用 promise2，所以借用 setiTimeout 异步的方式
        });
        this.onRejectedCallbacks.push(() => {
          // todo
          const timer = setTimeout(() => {
            try {
              let x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (err) {
              // 中间任何一个环节报错都要走 reject()
              reject(err);
            }
            clearTimeout(timer);
          }, 0); // 同步无法使用 promise2，所以借用 setiTimeout 异步的方式
        });
      }
    });
    return promise2;
  }
}

// ------------------------------------------------

// catch 方法
MyPromise.prototype.catch = function (onReJected) {
  // 返回一个没有第一个参数的 then 方法
  return this.then(undefined, onReJected);
};

// 写一个判断函数是否是一个 promise 的方法
const isPromise = (value) => {
  if (
    (value != null && typeof value === 'object') ||
    typeof value === 'function'
  ) {
    if (typeof value.then == 'function') {
      return true;
    }
  } else {
    return false;
  }
};
// static all 方法
MyPromise.all = (lists) => {
  // 返回一个 promise
  return new MyPromise((resolve, reject) => {
    let resArr = []; // 存储处理的结果的数组
    // 判断每一项是否处理完了
    let index = 0;
    function processData(i, data) {
      resArr[i] = data;
      index += 1;
      if (index == lists.length) {
        // 处理异步，要使用计数器，不能使用 resArr==lists.length
        resolve(resArr);
      }
    }
    for (let i = 0; i < lists.length; i++) {
      if (isPromise(lists[i])) {
        lists[i].then(
          (data) => {
            processData(i, data);
          },
          (err) => {
            reject(err); // 只要有一个传入的 promise 没执行成功就走 reject
            return;
          },
        );
      } else {
        processData(i, lists[i]);
      }
    }
  });
};

// promise 的 race 方法
// 两个方法赛跑，哪个赢了就先返回哪个的状态
MyPromise.race = (lists) => {
  return new MyPromise((resolve, reject) => {
    for (let i = 0; i < lists.length; i++) {
      if (isPromise(lists[i])) {
        lists[i].then(
          (data) => {
            resolve(data); // 哪个先完成就返回哪一个的结果
            return;
          },
          (err) => {
            reject(err);
            return;
          },
        );
      } else {
        resolve(lists[i]);
      }
    }
  });
};

// 静态 resolve 方法
MyPromise.resolve = (value) => {
  // 如果是一个 promise 对象就直接将这个对象返回
  if (isPromise(value)) {
    return value;
  } else {
    // 如果是一个普通值就将这个值包装成一个 promise 对象之后返回
    return new MyPromise((resolve, reject) => {
      resolve(value);
    });
  }
};

// 静态 reject 方法
MyPromise.reject = (value) => {
  return new MyPromise((resolve, reject) => {
    reject(value);
  });
};

// 终极方法 finally finally 其实就是一个 promise 的 then 方法的别名，在执行 then 方法之前，先处理 callback 函数
MyPromise.prototype.finally = function (cb) {
  return this.then(
    (value) => MyPromise.resolve(cb()).then(() => value),
    (reason) =>
      MyPromise.reject(cb()).then(() => {
        throw reason;
      }),
  );
};

MyPromise.defer = MyPromise.deferred = function () {
  let dfd = {};
  dfd.promise = new MyPromise((resolve, reject) => {
    dfd.resolve = resolve;
    dfd.reject = reject;
  });
  return dfd;
};

module.exports = MyPromise;
