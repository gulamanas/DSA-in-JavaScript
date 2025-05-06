// const uniqueElementFilter = (arr) => {
//   let uniqueArr = []
//   for (let i = 0; i < arr.length; i++) {
//     let count = 1;
//     let tempVal = arr[i];

//     for (let j = i + 1; j < arr.length; j++) {
//       if (tempVal == arr[j]) {
//         count++;
//       }
//     }
//     if (count <= 1) {
//       uniqueArr.push(tempVal)
//     }
//   }
//   console.log(uniqueArr)

// }

const uniqueElementFilter = (arr) => {
  let unEl = [...new Set(arr)];
  console.log(unEl)
}



uniqueElementFilter([1, 2, 3, 2, 4, 2, 1, 0])