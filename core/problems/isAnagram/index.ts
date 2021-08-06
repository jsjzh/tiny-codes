/**
 * isAnagram
 *
 * 给定两个字符串 s 和 t，编写一个函数来判断 t 是否是 s 的字母异位词。
 * 注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。
 *
 * 1 <= s.length, t.length <= 5 * 104
 * s 和 t 仅包含小写字母
 *
 * 进阶: 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
 *
 * 输入: s = "anagram", t = "nagaram"
 * 输出: true
 *
 * 输入: s = "rat", t = "car"
 * 输出: false
 */

export const code1 = (s: string, t: string): boolean => {
  if (s.length !== t.length) return false;

  const map: { [k: string]: number } = {};

  const sArr = s.split('');
  const tArr = t.split('');

  for (let i = 0; i < sArr.length; i++) map[sArr[i]] ? (map[sArr[i]] += 1) : (map[sArr[i]] = 1);

  for (let t = 0; t < tArr.length; t++) {
    if (map[tArr[t]] === undefined) return false;
    if ((map[tArr[t]] -= 1) === -1) return false;
  }

  for (const key in map) {
    if (Object.prototype.hasOwnProperty.call(map, key)) if (map[key] !== 0) return false;
  }

  return true;
};

// export const code2 = (s: string, t: string): boolean => {};
