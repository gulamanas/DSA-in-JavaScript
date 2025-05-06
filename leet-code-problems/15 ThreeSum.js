// Brute force solution O(n^3)

var threeSum = function (nums) {
  let newArr = []
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          let sorted = [nums[i], nums[j], nums[k]].sort()
          newArr.push(sorted);
        }
      }
    }
  }
  let uniqueTriplets = new Set(newArr.map(t => JSON.stringify(t)));
  let result = Array.from(uniqueTriplets).map(t => JSON.parse(t));
  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));