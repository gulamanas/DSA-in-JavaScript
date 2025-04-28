/* Optimized solution -,no need of rotating or sorting just check with the first and next element 
if only one of the element is larger than the case is satisfied else it is false;
*/

var check = function (nums) {
	let count = 0, n = nums.length;

	for (let i = 0; i < n; i++) {
		if (nums[i] > nums[(i + 1) % n]) {
			count++
		}
		if (count > 1) {
			return false
		}
	}
	return true;
};


// Un optimized solution - probably wrong solution

// var check = function (nums) {
// 	let originalArr = [...nums];
// 	nums.sort((a, b) => a - b)
// 	let i = 0;
// 	while (i < nums.length) {
// 		let num = nums.pop();
// 		nums.unshift(num)
// 		i++
// 		const areArraysEqual = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);
// 		let equal =  areArraysEqual(originalArr, nums)
// 		if (equal) {
// 			return true;
// 		}
// 	}
// 	return false;
// };

console.log(check([3, 4, 5, 1, 2]))
console.log(check([2, 1, 3, 4]))