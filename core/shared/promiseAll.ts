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

export default function promiseAll<T>(promises: T[]) {
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
