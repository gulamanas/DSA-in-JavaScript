function squareUp(n) {
  let result = [];

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      result.push(0);
    }

    for (let k = i; k >= 1; k--) {
      result.push(k);
    }
  }

  return result;
}

console.log(squareUp(1)); // Output: [0, 0, 1, 0, 2, 1, 3, 2, 1]
console.log(squareUp(3)); // Output: [0, 0, 1, 0, 2, 1, 3, 2, 1]
console.log(squareUp(2)); // Output: [0, 1, 2, 1]
console.log(squareUp(4)); // Output: [0, 0, 0, 1, 0, 0, 2, 1, 0, 3, 2, 1, 4, 3, 2, 1]
