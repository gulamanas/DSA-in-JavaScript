/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let res = [1];

  for (let i = 1; i <= rowIndex; i++) {
    for (let j = res.length - 1; j > 0; j--) {
      res[j] = res[j] + res[j - 1];
    }
    res.push(1);
  }
  return res;
};


// var getRow = function(rowIndex) {
// let result = [[1]];

// for (let i=1; i<=rowIndex; i++) {
//   let prevRow = result[result.length -1]  
//   let newRow=[1];
//   for (let j=0; j<prevRow.length -1; j++) {
//     newRow.push(prevRow[j] + prevRow[j+1]);
//   }
//   newRow.push(1)
//   result.push(newRow);
// }

// return result[rowIndex];
// };

console.log(getRow(4));