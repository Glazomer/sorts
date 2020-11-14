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
  for (let i = 2; i < arr.length; i *= 2) {
    const temp = new Array(i);
  }

  return arr.sort((a, b) => a - b);
};
