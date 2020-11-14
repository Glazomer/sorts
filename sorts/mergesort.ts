/* 
Implementation of in-place merge sort with stack.
  complexity:
    best time - O(N log N)
    avg time - O(N log N)
    worst time - O(N log N)
    
    memory - O(N)
    stable - Yes
*/

module.exports = function MergeSort(arr: number[]): number[] {
  const store = new Array(arr.length);
  // Len in length of subsequences that getting sorted
  for (let len = 2; len / 2 < arr.length; len *= 2) {
    let i = 0; // Index i for filling sorted subsequences into store
    for (let start = 0; start < arr.length; start += len) {
      // Iterating over subsequences
      const end = Math.min(start + len, arr.length),
        middle = Math.min(start + len / 2, end);

      let l = start,
        r = middle;
      while (l < middle || r < end) {
        if (r >= end || (l < middle && arr[l] < arr[r])) {
          store[i++] = arr[l++];
        } else {
          store[i++] = arr[r++];
        }
      }
    }
    Object.assign(arr, store);
  }
  return arr;
};
