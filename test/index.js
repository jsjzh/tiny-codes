// https://www.cnblogs.com/xinggood/p/11836096.html#_nav_8

const PENDING = 'pending';
const RESOLVED = 'fulFilled';
const REJECTED = 'rejected';

const isFunction = (value) => typeof value === 'function';

const resolvePromise = (promise2, x, resolve, reject) => {
  // x和promise2不能是同一个人，如果是同一个人就报错
  // 加一个开关，防止多次调用失败和成功，跟pending状态值一样的逻辑一样,走了失败就不能走成功了，走了成功一定不能在走失败
  if (promise2 === x) {
    return reject(
      new TypeError('Chaining cycle detected for promise #<promise>'),
    );
  }
  // 判断如果x是否是一个对象，判断函数是否是对象的方法有：typeof instanceof constructor toString
  if ((typeof x === 'object' && x != null) || typeof x === 'function') {
    let called;
    try {
      // 预防取.then的时候错误
      let then = x.then; // Object.definePropertype
      if (typeof then === 'function') {
        // 用then.call()为了避免在使用一次x.then报错
        then.call(
          x,
          (y) => {
            // resolve(y)// 采用promise的成功结果，并且向下传递
            if (called) {
              return;
            }
            called = true;
            // y有可能是一个promise，那么我们就要继续使用回调函数,直到解析出来的值是一个普通值
            resolvePromise(promise2, y, resolve, reject);
          },
          (r) => {
            if (called) {
              return;
            }
            called = true;
            reject(r); // 采用promise的失败结果，并且向下传递
          },
        );
      } else {
        if (called) {
          return;
        }
        called = true;
        resolve(x); // x不是一个函数，是一个对象
      }
    } catch (err) {
      if (called) {
        return;
      }
      called = true;
      reject(err);
    }
  } else {
    // x是一个普通值
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
      // pending最屏蔽的，resolve和reject只能调用一个，不能同时调用，这就是pending的作用
      if (this.status == PENDING) {
        this.status = RESOLVED;
        this.value = value;
        // 发布执行函数
        this.onResolvedCallbacks.forEach((fn) => fn());
      }
    };

    // 失败
    let reject = (reason) => {
      if (this.status == PENDING) {
        this.status = REJECTED;
        this.reason = reason;
        this.onRejectedCallbacks.forEach((fn) => fn());
      }
    };
    try {
      // 执行函数
      executor(resolve, reject);
    } catch (err) {
      // 失败则直接执行reject函数
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
      // 箭头函数，无论this一直是指向最外层的对象
      // 同步
      if (this.status == RESOLVED) {
        setTimeout(() => {
          try {
            let x = onFulFilled(this.value);
            // 添加一个resolvePromise（）的方法来判断x跟promise2的状态，决定promise2是走成功还是失败
            resolvePromise(promise2, x, resolve, reject);
          } catch (err) {
            // 中间任何一个环节报错都要走reject()
            reject(err);
          }
        }, 0); // 同步无法使用promise2，所以借用setiTimeout异步的方式
        // MDN 0>=4ms
      }
      if (this.status == REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (err) {
            // 中间任何一个环节报错都要走reject()
            reject(err);
          }
        }, 0); // 同步无法使用promise2，所以借用setiTimeout异步的方式
      }
      // 异步
      if (this.status == PENDING) {
        // 在pending状态的时候先订阅
        this.onResolvedCallbacks.push(() => {
          // todo
          setTimeout(() => {
            try {
              let x = onFulFilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (err) {
              // 中间任何一个环节报错都要走reject()
              reject(err);
            }
          }, 0); // 同步无法使用promise2，所以借用setiTimeout异步的方式
        });
        this.onRejectedCallbacks.push(() => {
          // todo
          setTimeout(() => {
            try {
              let x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (err) {
              // 中间任何一个环节报错都要走reject()
              reject(err);
            }
          }, 0); // 同步无法使用promise2，所以借用setiTimeout异步的方式
        });
      }
    });
    return promise2;
  }
}

// catch方法
MyPromise.prototype.catch = function (onReJected) {
  // 返回一个没有第一个参数的then方法
  return this.then(undefined, onReJected);
};

// 写一个判断函数是否是一个promise的方法
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
// static all方法
MyPromise.all = (lists) => {
  // 返回一个promise
  return new MyPromise((resolve, reject) => {
    let resArr = []; // 存储处理的结果的数组
    // 判断每一项是否处理完了
    let index = 0;
    function processData(i, data) {
      resArr[i] = data;
      index += 1;
      if (index == lists.length) {
        // 处理异步，要使用计数器，不能使用resArr==lists.length
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
            reject(err); // 只要有一个传入的promise没执行成功就走reject
            return;
          },
        );
      } else {
        processData(i, lists[i]);
      }
    }
  });
};

// promise的race方法
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

// 静态resolve方法
MyPromise.resolve = (value) => {
  // 如果是一个promise对象就直接将这个对象返回
  if (isPromise(value)) {
    return value;
  } else {
    // 如果是一个普通值就将这个值包装成一个promise对象之后返回
    return new MyPromise((resolve, reject) => {
      resolve(value);
    });
  }
};

// 静态reject方法
MyPromise.reject = (value) => {
  return new MyPromise((resolve, reject) => {
    reject(value);
  });
};

// 终极方法finally finally其实就是一个promise的then方法的别名，在执行then方法之前，先处理callback函数
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
