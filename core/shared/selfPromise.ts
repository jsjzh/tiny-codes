export default class SelfPromise {
  constructor(
    fn: (
      resolve: (...args: any[]) => void,
      reject: (...args: any[]) => void,
    ) => void,
  ) {}

  then() {}
}
