
var maxProfit = function (prices) {
  // Time Complexity O(n^2) - brute force approach

  // let max = 0;

  // for (let i = 0; i < prices.length; i++) {
  //   for (let j = i + 1; j < prices.length; j++) {
  //     max = Math.max(max, prices[j] - prices[i])
  //   }
  // }
  // return max;

  // two pointer is a dumb idea as you may end up selling before buying - p.s. don't use this

  // let left = 0;
  // let right = prices.length - 1;
  // let max = 0;
  // while (left < right) {
  //   if (prices[right] > prices[left]) {
  //     max = Math.max(max, prices[right] - prices[left])
  //     right--
  //   } else {
  //     max = Math.max(max, prices[right] - prices[left])
  //     left++
  //   }
  // }

  // return max;

  let minPrice = prices[0];
  let maxProfits = 0;

  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    maxProfits = Math.max(maxProfits, prices[i] - minPrice);
  }

  return maxProfits;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([7, 6, 4, 3, 1]))