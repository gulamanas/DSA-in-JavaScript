function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      // descending order (arr[i] < arr[i + 1])
      // ascending order (arr[i] > arr[i + 1])
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

console.log(bubbleSort([8, 20, -2, 4, -6]));

// Time Complexity - O(n^2)

// const arr = [8, 20, -2, 4, -6];
// bubbleSort(arr);
// console.log(arr);
