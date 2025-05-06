// function firstOccurence(haystack, needle) {
//  if (needle.length === "") return 0; 
//
// for (let i=0; i<= haystack.length - needle.length; i++) {
//     if (haystack.substring(i, i+needle.length) == needle) {
//       return i;
//     }
//   }
//   return -1
// }

// solution 2;

function firstOccurence(haystack, needle) {
  return haystack.indexOf(needle);
}

console.log(firstOccurence("sadbutsad", "sad")) 
console.log(firstOccurence("adbutsad", "sad")) 
console.log(firstOccurence("leetcode", "leeto")) 