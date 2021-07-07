/* eslint-disable prefer-promise-reject-errors */

import SelfPromise from '@/shared/selfPromise';
// import MyPromise from '@/shared/myPromise';

const promise = new Promise((resolve, reject) => {
  Math.random() >= 0.5 ? resolve('success') : reject('err');
});

promise.then(
  (value) => {
    console.log('resolve', value);
  },
  (reason) => {
    console.log('reject', reason);
  },
);

// 输出 resolve success

// MyPromise.resolve()
//   .then(() => {
//     console.log(0);
//     return MyPromise.resolve(4);
//   })
//   .then((res: any) => {
//     console.log(res);
//   });

// MyPromise.resolve()
//   .then(() => {
//     console.log(1);
//   })
//   .then(() => {
//     console.log(2);
//   })
//   .then(() => {
//     console.log(3);
//   })
//   .then(() => {
//     console.log(5);
//   })
//   .then(() => {
//     console.log(6);
//   });
