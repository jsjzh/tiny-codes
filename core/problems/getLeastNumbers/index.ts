/**
 * getLeastNumbers
 *
 * 输入整数数组 arr，找出其中最小的 k 个数。例如，输入 4、5、1、6、2、7、3、8 这 8 个数字，则最小的 4 个数字是 1、2、3、4。
 *
 * 0 <= k <= arr.length <= 10000
 * 0 <= arr[i] <= 10000
 *
 * 输入：arr = [3, 2, 1], k = 2
 * 输出：[1, 2] 或者 [2, 1]
 *
 * 输入：arr = [0, 1, 2, 1], k = 1
 * 输出：[0]
 */

 export const code1 = (arr: number[], k: number): number[] => {
  if (!k) return [];
  if (k === arr.length) return arr;
  if (arr.length === 1) return [arr[0]];

  for (let i = 0; i <= k; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  return arr.slice(0, k);
};

// 速度好像并没有快多少
// 但是这个排序用的是快排，意思一下
export const code2 = (arr: number[], k: number): number[] => {
  if (!k) return [];
  if (k === arr.length) return arr;
  if (arr.length === 1) return [arr[0]];

  const fastSort = (arr: number[]): number[] => {
    if (arr.length < 2) return arr;

    const center = arr.splice(Math.floor(arr.length / 2), 1)[0];

    const leftArr: number[] = [];
    const rightArr: number[] = [];

    while (arr.length) {
      if (arr[0] < center) leftArr.push(arr.shift() as number);
      else rightArr.push(arr.shift() as number);
    }

    return fastSort(leftArr).concat(center).concat(fastSort(rightArr));
  };

  return fastSort(arr).slice(0, k);
};
