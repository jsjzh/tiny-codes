const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

export default class SelfPromise {
  static deferred() {
    let result: {
      promise: SelfPromise;
      resolve: any;
      reject: any;
    } = {
      promise: new SelfPromise((resolve, reject) => {
        result.resolve = resolve;
        result.reject = reject;
      }),
      resolve: null,
      reject: null,
    };

    return result;
  }

  private __status: 'pending' | 'fulfilled' | 'rejected' = PENDING;
  private __value = null;
  private __reason = null;
  private __onFulfilledCallbacks: ((value: any) => any)[] = [];
  private __onRejectedCallbacks: ((reason: any) => any)[] = [];

  constructor(
    executor: (
      resolve: (value: any) => void,
      reject?: (reason: any) => void,
    ) => void,
  ) {
    executor(this.resolve.bind(this), this.reject.bind(this));
  }

  then(onFulfilled: any, onRejected?: any) {
    if (this.__status === FULFILLED) {
      const result = onFulfilled(this.__value);
      result && (this.__value = result);
    } else if (this.__status === REJECTED) {
      const result = onRejected(this.__reason);
      result && (this.__reason = result);
    } else if (this.__status === PENDING) {
      this.__onFulfilledCallbacks.push(onFulfilled);
      this.__onRejectedCallbacks.push(onRejected);
    }
    return this;
  }

  resolve(value: any) {
    if (this.__status === PENDING) {
      this.__status = FULFILLED;
      this.__value = value;

      while (this.__onFulfilledCallbacks.length) {
        const fn = this.__onFulfilledCallbacks.shift();
        const result = fn?.(this.__value);
        result && (this.__value = result);
      }
    }
  }

  reject(reason: any) {
    if (this.__status === PENDING) {
      this.__status = REJECTED;
      this.__reason = reason;

      while (this.__onRejectedCallbacks.length) {
        const fn = this.__onRejectedCallbacks.shift();
        const result = fn?.(this.__reason);
        result && (this.__reason = result);
      }
    }
  }
}

export function promiseAll<T1>(promises: [T1 | Promise<T1>]): Promise<[T1]>;
export function promiseAll<T1, T2>(
  promises: [T1 | Promise<T1>, T2 | Promise<T2>],
): Promise<[T1, T2]>;
export function promiseAll<T1, T2, T3>(
  promises: [T1 | Promise<T1>, T2 | Promise<T2>, T3 | Promise<T3>],
): Promise<[T1, T2, T3]>;

export function promiseAll<T1, T2, T3, T4>(
  promises: [
    T1 | Promise<T1>,
    T2 | Promise<T2>,
    T3 | Promise<T3>,
    T4 | Promise<T4>,
  ],
): Promise<[T1, T2, T3, T4]>;

export function promiseAll<T1, T2, T3, T4, T5>(
  promises: [
    T1 | Promise<T1>,
    T2 | Promise<T2>,
    T3 | Promise<T3>,
    T4 | Promise<T4>,
    T5 | Promise<T5>,
  ],
): Promise<[T1, T2, T3, T4, T5]>;

export function promiseAll<T>(promises: T[]) {
  return new Promise((resolve, reject) => {
    const arr: T[] = [];
    let count = 0;
    for (let i = 0; i < promises.length; i++) {
      const promise = promises[i];
      Promise.resolve(promise)
        .then((result) => {
          arr[i] = result;
          count++;
          if (count === promises.length) resolve(arr);
        })
        .catch((e) => reject(e));
    }
  });
}
