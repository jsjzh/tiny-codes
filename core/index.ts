import SelfPromise from '@/shared/selfPromise';

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
    console.log(value);
    return other();
  })
  .then((value: any) => {
    console.log(value);
  });

// promise
//   .then(
//     (value: any) => {
//       console.log('resolve', value);
//       return 'hello';
//     },
//     (reason: any) => {
//       console.log('reject', reason);
//       return 'world';
//     },
//   )
//   .then(
//     (value: any) => {
//       console.log('resolve', value);
//     },
//     (reason: any) => {
//       console.log('reject', reason);
//     },
//   )
//   .then(
//     (value: any) => {
//       console.log('resolve', value);
//     },
//     (reason: any) => {
//       console.log('reject', reason);
//     },
//   );

// // 输出 resolve success

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
