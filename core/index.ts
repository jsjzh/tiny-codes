import SPromise from '@/shared/promise';

// ------------------------------------------------

const promise1 = new SPromise<number>((resolve) => {
  resolve(1);
});

const promise2 = promise1.then(
  (value) => {
    console.log('value1', value);
    return new SPromise<string>((resolve) => {
      resolve('success');
    });
  },
  (error) => {
    console.log('error1', error);
  },
);

const promise3 = promise2.then(
  (value) => {
    console.log('value2', value);
    return 3;
  },
  (error) => {
    console.log('error2', error);
  },
);

const promise4 = promise3.then(
  (value) => {
    console.log('value3', value);
    return '4';
  },
  (error) => {
    console.log('error3', error);
  },
);

// console.log(promise);

// promise2.then(
//   (value) => {
//     console.log('value2', value);
//   },
//   (error) => {
//     console.log('error', error);
//   },
// );

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
