const topRightCorner = (num) => {
  let sum = '';
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
      if (j + 1 > i) {
        sum += '*';
      } else {
        sum += '_';
      }
    }
    sum += '\n';
  }
  return sum;
};

console.log(topRightCorner(3));
console.log('-------------------------');
console.log(topRightCorner(5));

// Output

// * * * * *
//   * * * *
//     * * *
//       * *
//         *

// Time Complexity - O(n^2)
