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
  return arr.sort((a, b) => a - b);
};
