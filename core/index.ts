import SelfPromise from '@/shared/selfPromise';

// ------------------------------------------------

// 1
// resolve success
// 2
// resolve other

const promise = new SelfPromise((resolve, reject) => {
  resolve('success');
});

function other() {
  return new SelfPromise((resolve, reject) => {
    resolve('other');
  });
}
promise
  .then((value: any) => {
    console.log(1);
    console.log('resolve', value);
    return 123;
  })
  .then((value: any) => {
    console.log(2);
    console.log('resolve', value);
  })
  .then((value: any) => {
    console.log(3);
    console.log('resolve', value);
  })
  .then((value: any) => {
    console.log(4);
    console.log('resolve', value);
  });

// ------------------------------------------------

// 1
// 2
// 3
// 4
// 5

// new SelfPromise((resolve, reject) => {
//   console.log(1);
//   resolve(3);
// })
//   .then((val: any) => {
//     console.log(val);
//     return new SelfPromise((resolve, reject) => {
//       resolve(4);
//     });
//   })
//   .then((val: any) => {
//     console.log(val);
//     return new SelfPromise((resolve, reject) => {
//       resolve(5);
//     });
//   })
//   .then((val: any) => {
//     console.log(val);
//   });

// console.log(2);

// ------------------------------------------------

// Promise.resolve()
//   .then(() => {
//     console.log(0);
//     return Promise.resolve(4);
//   })
//   .then((res) => {
//     console.log(res);
//   });

// Promise.resolve()
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

// ------------------------------------------------

// const sleep = (seconds) =>
// new Promise((resolve) => setTimeout(() => resolve(seconds), seconds));

// pAll([1, 2, 3]).then(o => console.log(o))
// pAll([
//   sleep(3000),
//   sleep(2000),
//   sleep(1000)
// ]).then(o => console.log(o))
// pAll([
//   sleep(3000),
//   sleep(2000),
//   sleep(1000),
//   Promise.reject(10000)
// ]).then(o => console.log(o)).catch(e => console.log(e, '<- Error'))
