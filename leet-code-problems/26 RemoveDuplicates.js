// var removeDuplicates = function(nums) {
//   return [...new Set(nums)].length; // creates new array
// };

// solution without creating new array ----
var removeDuplicates = function (nums) {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j]
    }
  }
  return i + 1;
}


console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3]))