/**
 * longestCommonPrefix
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ''。
 *
 * 0 <= strs.length <= 200
 * 0 <= strs[i].length <= 200
 * strs[i] 仅由小写英文字母组成
 */

export const code1 = (strs: string[]): string => {
  if (!strs.length) return '';
  if (strs.length === 1) return strs[0];

  const [baseStr, ...newStrs] = strs;
  for (let i = baseStr.length; i > 0; i--) {
    const coder = baseStr.slice(0, i);
    if (newStrs.every((str) => str.startsWith(coder))) {
      return coder;
    }
  }
  return '';
};
