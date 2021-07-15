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

// ------------------------------------------------
