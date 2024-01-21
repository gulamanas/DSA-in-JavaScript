const topLeftCorner = (num) => {
  let sum = '';
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num - i + 1; j++) {
      sum += '* ';
    }
    sum += '\n';
  }
  return sum;
};

console.log(topLeftCorner(4));

// Output
// * * * *
// * * *
// * *
// *

// Time Complexity - O(n^2)
