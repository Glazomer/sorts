/* 
Implementation of in-place top-down merge sort with stack.
  complexity:
    best time - O(N log N)
    avg time - O(N log N)
    worst time - O(N log N)
    
    memory - O(N)
    stable - Yes
*/

function MergeArrays(target: number[], arr1: number[], arr2: number[]) {
  let i, i1, i2;
  i = i1 = i2 = 0;

  while (i1 < arr1.length || i2 < arr2.length) {
    if (i2 >= arr2.length || (i1 < arr1.length && arr1[i1] < arr2[i2])) {
      target[i++] = arr1[i1++];
    } else {
      target[i++] = arr2[i2++];
    }
  }
}

module.exports = function MergeSortTopDown(arr: number[]): number[] {
  if (arr.length > 1) {
    const mid = Math.floor(arr.length / 2),
      left = MergeSortTopDown(arr.slice(0, mid)),
      right = MergeSortTopDown(arr.slice(mid));

    MergeArrays(arr, left, right);
  }
  return arr;
};
