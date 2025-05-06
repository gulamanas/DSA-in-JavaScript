// Array implementation
// Time Complexity - O(n^2)

// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };

// Two Pointer Implementation
// O(n) complexity.

const twoSum = (nums, target) => {
  let n = nums.length;
  let left = 0;
  let right = n - 1;
  while (left < right) {
    let sum = nums[left] + nums[right]
    if (sum === target) return [left, right]
    else if (sum > target) right--
    else left++
  }
  return -1;
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 7, 11, 15], 17));
console.log(twoSum([2, 7, 12, 15, 20], 20));
