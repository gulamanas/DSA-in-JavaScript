// O(n^2) complexity.



var generatePascalTriangle = function (numRows) {
  if (numRows === 0) return [];
  let result = [[1]];

  for (let i = 1; i < numRows; i++) {
    let prevRow = result[result.length - 1];
    let newRow = [1];
    for (let j = 0; j < prevRow.length - 1; j++) {
      newRow.push(prevRow[j] + prevRow[j+1])
    }
    newRow.push(1);
    result.push(newRow);
  }

  return result;
};

console.log(generatePascalTriangle(5))
console.log(generatePascalTriangle(0))
console.log(generatePascalTriangle(10))