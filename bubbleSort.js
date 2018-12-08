/**
  Bubble Sort
  Time complexicy - O(n2)
 */

function bubbleSort(arr) {
  // [2,5,1,39,23] -> compare the element start from left to right and
  // if the left element is bigger than next element then swap the value

  let change; // This varaible used when the last elements are already sorted, then it uses to break the loop
  for (let i = 0; i < arr.length; i++) {
    change = false;
    for (let j = 0; j < arr.length - (i + 1); j++) {
      if (arr[j] > arr[j + 1]) {
        change = true;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    if (!change) break;
  }

  return arr;
}

module.exports = bubbleSort;
