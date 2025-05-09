// var removeElement = function (nums, val) {
//   return nums.filter(num => num != val).length; // Takes extra space and create new array
// };

// without creating new array;

var removeElement = function (nums, val) {
  let i = 0;
  for (let j=0; j<nums.length; j++) {
    if (nums[j] !==val) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
};

console.log(removeElement([3, 2, 2, 3], 3))
console.log(removeElement([0,1,2,2,3,0,4,2], 2))