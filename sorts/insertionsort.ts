/* 
Implementation of in-place insertion sort.

  complexity:
    best time - O(N)
    avg time - O(N^2)
    worst time - O(N^2)
    
    memory - O(1)
    stable - Yes
*/

module.exports = function InsertionSort(arr: number[]): number[] {
  const swap = (i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);
  for (let i = 1; i < arr.length; i++)
    for (let j = i; j > 0 && arr[j - 1] > arr[j]; j--) swap(j - 1, j);
  return arr;
};
