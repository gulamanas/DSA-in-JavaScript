const filledSquare = (num) => {
  let sum = '';
  let result = '';
  for (let i = 0; i < num; i++) {
    sum += '* ';
  }
  for (let j = 0; j < num; j++) {
    // If you want to address the space after printing all the values.
    if (j == num - 1) {
      return (result += sum);
    }
    result += sum + '\n';
  }
  return result;
};

console.log(filledSquare(4));
console.log('-------------------------');
console.log(filledSquare(5));

// Output
// * * * *
// * * * *
// * * * *
// * * * *

// Time Complexity  - O(n)
