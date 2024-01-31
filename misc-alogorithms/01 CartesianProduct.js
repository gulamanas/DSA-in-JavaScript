function cartesianProduct(arr1, arr2) {
  const prod = [];
  for (const a of arr1) {
    for (const b of arr2) {
      prod.push([a, b]);
    }
  }
  return prod;
}

console.log(cartesianProduct([1, 2], [3, 4]));
console.log(cartesianProduct([1, 2], [3, 4, 5]));

// Time Complexity - O(mn)
