/* eslint-disable no-param-reassign */
import { getFileName } from '../utils';
import Logger from '../shared/logger';

const logger = new Logger(getFileName(__filename));

// 常用的数组排序方法

// 冒泡排序
// https://user-gold-cdn.xitu.io/2018/8/14/16538fc898b4742e?imageslim
const bubleSort = (arr: number[]): number[] => {
  for (let i = arr.length; i > 1; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }

  return arr;
};

// 选择排序
// https://user-gold-cdn.xitu.io/2018/8/14/16538fc899fabfa0?imageslim
const selectSort = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[i]) [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  return arr;
};

// 插入排序
// https://user-gold-cdn.xitu.io/2018/8/14/16538fc898df137f?imageslim
const insertSort = (arr: number[]): number[] => {
  for (let i = 1; i < arr.length; i++) {
    // 外循环从 1 开始，默认 arr[0] 是有序段
    for (let j = i; j > 0; j--) {
      // j = i 时，将 arr[j] 依次插入有序段中
      if (arr[j] < arr[j - 1]) [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      else break;
    }
  }
  return arr;
};

// 归并排序
// https://user-gold-cdn.xitu.io/2019/7/23/16c1f400a4920693?imageView2/0/w/1280/h/960/format/webp/ignore-error/1
const mergeSort = (arr: number[]): number[] => {
  if (arr.length < 2) return arr;
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};

function merge(left: number[], right: number[]) {
  const result: number[] = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) result.push(left.shift() as number);
    else result.push(right.shift() as number);
  }

  while (left.length) result.push(left.shift() as number);

  while (right.length) result.push(right.shift() as number);

  return result;
}

// 快速排序
// https://user-gold-cdn.xitu.io/2019/7/23/16c1f400a959d098?imageslim
const quickSort = (arr: number[]): number[] => {
  if (arr.length <= 1) {
    return arr;
  }
  // 取基准点
  const midIndex = Math.floor(arr.length / 2);
  // 取基准点的值，splice(index,1) 则返回的是含有被删除的元素的数组。
  const valArr = arr.splice(midIndex, 1);
  const midIndexVal = valArr[0];
  const left = []; // 存放比基准点小的数组
  const right = []; // 存放比基准点大的数组
  // 遍历数组，进行判断分配
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < midIndexVal) {
      left.push(arr[i]); // 比基准点小的放在左边数组
    } else {
      right.push(arr[i]); // 比基准点大的放在右边数组
    }
  }
  // 递归执行以上操作，对左右两个数组进行操作，直到数组长度为 <= 1
  return quickSort(left).concat(midIndexVal, quickSort(right));
};

// 希尔排序
const shellSort = (arr: number[]): number[] => {
  let len = arr.length;
  let temp;
  let gap = 1;

  while (gap < len / 3) {
    // 动态定义间隔序列
    gap = gap * 3 + 1;
  }
  for (gap; gap > 0; gap = Math.floor(gap / 3)) {
    for (let i = gap; i < len; i++) {
      temp = arr[i];
      let j = i - gap;
      for (; j >= 0 && arr[j] > temp; j -= gap) {
        arr[j + gap] = arr[j];
      }
      arr[j + gap] = temp;
    }
  }
  return arr;
};

// 堆排序
const heapSort = (arr: number[]): number[] => {
  // 初始化大顶堆，从第一个非叶子结点开始
  for (let i = Math.floor(arr.length / 2 - 1); i >= 0; i--) {
    heapify(arr, i, arr.length);
  }
  // 排序，每一次 for 循环找出一个当前最大值，数组长度减一
  for (let i = Math.floor(arr.length - 1); i > 0; i--) {
    // 根节点与最后一个节点交换
    [arr[0], arr[1]] = [arr[1], arr[0]];
    // 从根节点开始调整，并且最后一个结点已经为当前最大值，不需要再参与比较，所以第三个参数为 i，即比较到最后一个结点前一个即可
    heapify(arr, 0, i);
  }
  return arr;
};

// 将 i 结点以下的堆整理为大顶堆，注意这一步实现的基础实际上是：
// 假设结点 i 以下的子堆已经是一个大顶堆，heapify 函数实现的
// 功能是实际上是：找到 结点 i 在包括结点 i 的堆中的正确位置。
// 后面将写一个 for 循环，从第一个非叶子结点开始，对每一个非叶子结点
// 都执行 heapify 操作，所以就满足了结点 i 以下的子堆已经是一大顶堆
const heapify = (arr: number[], i: number, length: number) => {
  let temp = arr[i]; // 当前父节点
  // j < length 的目的是对结点 i 以下的结点全部做顺序调整
  for (let j = 2 * i + 1; j < length; j = 2 * j + 1) {
    temp = arr[i]; // 将 arr[i] 取出，整个过程相当于找到 arr[i] 应处于的位置
    if (j + 1 < length && arr[j] < arr[j + 1]) {
      j++; // 找到两个孩子中较大的一个，再与父节点比较
    }
    if (temp < arr[j]) {
      [arr[i], arr[j]] = [arr[j], arr[0]];
      i = j; // 交换后，temp 的下标变为 j
    } else {
      break;
    }
  }
};

export default () => {
  const arr = new Array(10000)
    .fill(null)
    .map(() => Math.floor(Math.random() * 1000));

  logger.time(() => bubleSort(arr.slice()), 'bubleSort');
  logger.time(() => selectSort(arr.slice()), 'selectSort');
  logger.time(() => insertSort(arr.slice()), 'insertSort');
  logger.time(() => mergeSort(arr.slice()), 'mergeSort');
  logger.time(() => quickSort(arr.slice()), 'quickSort');
  logger.time(() => shellSort(arr.slice()), 'shellSort');
  logger.time(() => heapSort(arr.slice()), 'heapSort');

  logger.time(() => bubleSort(arr.slice().sort((a, b) => a - b)), 'arrSort');
};
