const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

export default class SelfPromise {
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
    executor(this.__resolve.bind(this), this.__reject.bind(this));
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

  private __resolve(value: any) {
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

  private __reject(reason: any) {
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
