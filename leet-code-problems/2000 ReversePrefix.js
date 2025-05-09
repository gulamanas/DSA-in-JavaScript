/*
var reversePrefix = function (word, ch) {
  let index = word.indexOf(ch);
  let str = ""
  for (let i = index; i >= 0; i--) {
    str+= word[i];
  }
  for (let i=index+1; i< word.length; i++) {
    str+= word[i];
  }
  return str;
};
*/

var reversePrefix = function (word, ch) {
  let index = word.indexOf(ch);
  if (index === -1) return word;

  let str = word.substring(0, index + 1).split("").reverse().join("")
  return str + word.substring(index + 1)
};

// by using string + array methods

// var reversePrefix = function (word, ch) {
//   const index = word.indexOf(ch);
//   if (index === -1) return word;

//   const reversed = word.slice(0, index + 1).split('').reverse().join('');
//   return reversed + word.slice(index + 1);
// };

console.log(reversePrefix("abcdefd", "d"))
console.log(reversePrefix("abcdefd", "g"))