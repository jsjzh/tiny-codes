import SelfPromise from '@/shared/selfPromise';

// 1
// 2
// 3
// 4
// 5

new SelfPromise((resolve, reject) => {
  console.log(1);
  resolve(3);
})
  .then((val: any) => {
    console.log(val);
    return new SelfPromise((resolve, reject) => {
      resolve(4);
    });
  })
  .then((val: any) => {
    console.log(val);
    return new SelfPromise((resolve, reject) => {
      resolve(5);
    });
  })
  .then((val: any) => {
    console.log(val);
  });

console.log(2);

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
