/**
 * isSubsequence
 *
 * 给定字符串 s 和 t，判断 s 是否为 t 的子序列。
 * 字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。
 *
 * 0 <= s.length <= 100
 * 0 <= t.length <= 10^4
 * 两个字符串都只由小写字符组成。
 *
 * 进阶：
 * 如果有大量输入的 S，称作 S1, S2, ... , Sk 其中 k >= 10亿，你需要依次检查它们是否为 T 的子序列。在这种情况下，你会怎样改变代码？
 *
 * 输入：s = "abc", t = "ahbgdc"
 * 输出：true
 *
 * 输入：s = "axc", t = "ahbgdc"
 * 输出：false
 */

export const code1 = (s: string, t: string): boolean => {
  if (!s.length) return true;
  if (!t.length && s.length) return false;

  let nextIndex = 0;
  for (let i = 0; i < s.length; i++) {
    const index = t.indexOf(s.charAt(i), nextIndex);
    if (index !== -1) nextIndex = index + 1;
    else return false;
  }
  return true;
};

// export const code2 = (s: string, t: string): boolean => {};
