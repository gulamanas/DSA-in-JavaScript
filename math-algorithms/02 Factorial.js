const factorial = (n) => {
  let result = 1;
  if (n === 0) {
    return (result = 1);
  }
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
};

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
