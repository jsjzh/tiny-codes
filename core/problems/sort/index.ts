/**
 * sort
 *
 * 常用的数组排序方法
 * https://juejin.cn/post/6844903444365443080
 * https://juejin.cn/post/6844903470009417742
 */

// 冒泡排序
// https://user-gold-cdn.xitu.io/2018/8/14/16538fc898b4742e?imageslim
// 外循环从 arr.length 开始
// 每次外循环都会通过运行一波内循环
// 把最大的一个数字放到后面
// 并且由于第一个循环会把最大放到后面
// 第二个循环会把第二大的放到后面
// 所以内循环每次只需要比较到外循环的下标处即可
export const bubleSort = (arr: number[]): number[] => {
  if (arr.length < 2) return arr;

  for (let i = arr.length; i > 1; i--) {
    for (let t = 0; t < i; t++) {
      if (arr[t] > arr[t + 1]) [arr[t], arr[t + 1]] = [arr[t + 1], arr[t]];
    }
  }

  return arr;
};

// 选择排序
// https://user-gold-cdn.xitu.io/2018/8/14/16538fc899fabfa0?imageslim
// 感觉和冒泡排序很像
// 冒泡排序是每次都把最大的移到后面
// 选择排序是每次把最小的移到前面
// 然后因为 j = i + 1，所以外层的 i 要 < arr.length - 1
// 内层的 j 最后一次循环才会有值
export const selectSort = (arr: number[]): number[] => {
  if (arr.length < 2) return arr;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  return arr;
};

// 插入排序
// https://user-gold-cdn.xitu.io/2018/8/14/16538fc898df137f?imageslim
// 这里和选择排序也有点类似
// 是把小的放在前面
// 但是比较大的区别就是
// 因为外层循环进行的途中，前面就会被排序好
// 所以当发现 arr[j] >= arr[j - 1] 时，就可以 break 了
export const insertSort = (arr: number[]): number[] => {
  if (arr.length < 2) return arr;

  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      else break;
    }
  }
  return arr;
};

// 快速排序
// https://user-gold-cdn.xitu.io/2019/7/23/16c1f400a959d098?imageslim
// 前端很重要的排序算法
// 用了递归的方式，每次选取一个数字，可以随意选，这里选了中间的那个数
// 然后每次循环数组，把所有的数字和这个中间数比，如果比他小就放左边，否则放右边
// 递归，并且用 left concat center right
export const quickSort = (arr: number[]): number[] => {
  if (arr.length < 2) return arr;

  const midIndex = Math.floor(arr.length / 2);
  const valArr = arr.splice(midIndex, 1);
  const midIndexVal = valArr[0];

  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < midIndexVal) left.push(arr[i]);
    else right.push(arr[i]);
  }
  // 递归执行以上操作，对左右两个数组进行操作，直到数组长度为 <= 1
  return quickSort(left).concat([midIndexVal], quickSort(right));
};

// 归并排序
// https://user-gold-cdn.xitu.io/2019/7/23/16c1f400a4920693?imageView2/0/w/1280/h/960/format/webp/ignore-error/1
// 用了分治法
// 每次都把数组分割成两半
// 然后对数组排序，这样 merge 的传入的两个数组总是排序好的
// 然后在 merge 的函数里，先是判断是否都有 length
// 如果都有的话，比较大小
// 否则就把剩下的那个数组元素顺序不变的加到新数组后面
export const mergeSort = (arr: number[]): number[] => {
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
