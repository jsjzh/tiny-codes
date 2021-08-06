/**
 * longestPalindrome
 *
 * 给定一个包含大写字母和小写字母的字符串，找到通过这些字母构造成的最长的回文串。
 * 在构造过程中，请注意区分大小写。比如 "Aa" 不能当做一个回文字符串。
 * 假设字符串的长度不会超过 1010。
 *
 * 输入："abccccdd"
 * 输出：7
 * 解释：我们可以构造的最长的回文串是"dccaccd", 它的长度是 7。
 */

export const code1 = (s: string): number => {
  const map: { [k: string]: number } = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    map[char] ? map[char]++ : (map[char] = 1);
  }

  let count = 0;
  let flag = false;

  const arr = Object.values(map);

  if (arr.length === 1) return arr[0];

  arr.forEach((number) => {
    if (number & 1) {
      !flag && (flag = true);
      count += number - 1;
    } else {
      count += number;
    }
  });

  return flag ? count + 1 : count;
};

// export const code2 = (s: string): number => {};
