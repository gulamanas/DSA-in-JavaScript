function isPrefixString(s, words) {
  let str = "";
  for (let i=0; i<words.length; i++) {
    str+=words[i];
    if (str === s) return true;
    if (str.length > s.length) return false
  }
  return false;
}

console.log(isPrefixString("iloveleetcode", ["i", "love", "leetcode", "apples"]))
console.log(isPrefixString("iloveleetcode", ["apples","i","love","leetcode"]))