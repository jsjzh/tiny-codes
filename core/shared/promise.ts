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
        const result = onFulfilled(this.__value);
        resolvePromise<TValue>(result, resolve, reject);
      } else if (this.__status === IStatus.REJECTED) {
        const result = onRejected(this.__error);
        resolvePromise<TError>(result, resolve, reject);
      }
    });

    return promise;
  }
}

const resolvePromise = <T>(
  someone: SPromise<T> | T,
  resolve: (value: T) => void,
  reject: (reason: any) => void,
) => {
  if (someone instanceof SPromise) {
    someone.then((value) => resolvePromise(value, resolve, reject), reject);
  } else {
    return resolve(someone);
  }
};
