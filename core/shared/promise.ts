enum IStatus {
  PENDING = 'pending',
  FULFILLED = 'fulfilled',
  REJECTED = 'rejected',
}

export default class SPromise<T> {
  private __status: IStatus;
  private __value: any;
  private __error: any;
  // private __onFulfilledCallbacks: ((value: any) => any)[];
  // private __onRejectedCallbacks: ((reason: any) => any)[];

  constructor(
    executor: (
      resolve: (value: T) => void,
      reject: (reason: any) => void,
    ) => void,
  ) {
    this.__status = IStatus.PENDING;
    this.__value = null;
    this.__error = null;
    // this.__onFulfilledCallbacks = [];
    // this.__onRejectedCallbacks = [];

    const resolve = (value: T) => {
      if (this.__status === IStatus.PENDING) {
        this.__status = IStatus.FULFILLED;
        this.__value = value;
      }
    };

    const reject = (error: any) => {
      if (this.__status === IStatus.PENDING) {
        this.__status = IStatus.FULFILLED;
        this.__error = error;
      }
    };

    executor(resolve, reject);
  }

  then<TValue = T, TError = never>(
    onFulfilled: (value: T) => TValue,
    onRejected: (error: any) => TError,
  ) {
    const promise = new SPromise<TValue | TError>((resolve, reject) => {
      if (this.__status === IStatus.FULFILLED) {
        resolve(onFulfilled(this.__value));
      } else if (this.__status === IStatus.REJECTED) {
        reject(onRejected(this.__error));
      }
    });

    return promise;
  }
}
