var singleNumber = function (nums) {
  if (nums.length === 1) return nums[0];

  let obj = {}

  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]]++;
    } else {
      obj[nums[i]] = 1;
    }
  }


  for (let [key,value] of Object.entries(obj)) {
    if (value === 1) return key;
  }

  // return obj;
};

// console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
// (singleNumber([4, 1, 2, 1, 2]));