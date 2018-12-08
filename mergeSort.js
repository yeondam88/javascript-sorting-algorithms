/**
  merge Sort
  Time complexicy - O(n log n)
 */

// helper function - arrays are need to be sorted before run this function
// [1,5,7], [4,7,12]

function merge(arr1, arr2) {
  let indexA = 0;
  let indexB = 0;
  let results = [];

  while (indexA < arr1.length && indexB < arr2.length) {
    if (arr1[indexA] < arr2[indexB]) {
      results.push(arr1[indexA]);
      indexA++;
    } else {
      results.push(arr2[indexB]);
      indexB++;
    }
  }

  while (indexA < arr1.length) {
    // when the array is exhausted, push all leftover elements
    results.push(arr1[indexA]);
    indexA++;
  }

  while (indexB < arr2.length) {
    // when the array is exhausted, push all leftover elements
    results.push(arr2[indexB]);
    indexB++;
  }

  return results;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid)); // slice out from index 0 to before mid [1,3,5,2,6] -> [1,3]
  let right = mergeSort(arr.slice(mid)); // slice out from index mid to end [1,3,5,2,6] -> [5,2,6]

  return merge(left, right);
}

module.exports = mergeSort;
