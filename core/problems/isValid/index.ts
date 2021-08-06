/**
 * isValid
 *
 * 给定一个只包括 '('、')'、'{'、'}'、'['、']' 的字符串 s，判断字符串是否有效。
 *
 * 有效字符串需满足：
 *
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 *
 * 1 <= s.length <= 10^4
 * s 仅由括号 '()[]{}' 组成
 */

export const code1 = (s: string): boolean => {
  if (!s.length) return true;
  if (s.length % 2) return false;

  const L = ['(', '{', '['];
  const R = [')', '}', ']'];

  const arr: string[] = [];
  for (let i = 0; i < s.length; i++) {
    const coder = s[i];
    if (R.includes(coder)) {
      if (R.indexOf(coder) === L.indexOf(arr[arr.length - 1])) {
        arr.pop();
      } else {
        return false;
      }
    } else if (L.includes(coder)) {
      arr.push(coder);
    }
  }

  return !arr.length;
};
