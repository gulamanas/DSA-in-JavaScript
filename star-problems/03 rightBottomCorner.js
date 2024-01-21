const rightBottomCorner = (num) => {
  let sum = '';
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
      if (num - j + 1 <= i) {
        sum += '*';
      } else {
        sum += '_';
      }
    }
    sum += '\n';
  }
  return sum;
};

console.log(rightBottomCorner(4));

// using underscores instead of spaces as in JavaScript spaces merge into a single space
// Output
//        *
//      * *
//    * * *
//  * * * *

// Time Complexity - O(n^2)
