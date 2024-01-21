const fibonacci = (num) => {
  const fib = [0, 1];

  for (let i = 2; i < num; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib;
};

console.log(fibonacci(4));
console.log(fibonacci(7));
console.log(fibonacci(11));

// Time Complexity - O(n)
