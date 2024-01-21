const leftBottomCorner = (num) => {
  let sum = '';
  for (let i = 0; i < num; i++) {
    for (let j = 0; j <= i; j++) {
      sum += '* ';
    }
    sum += '\n';
  }
  return sum;
};

console.log(leftBottomCorner(4));
console.log('---------------');
console.log(leftBottomCorner(6));

// Output
// *
// * *
// * * *
// * * * *

// Time Complexity - O(n^2)
