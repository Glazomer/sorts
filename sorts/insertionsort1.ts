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
  for (let i = 1; i < arr.length; i++)
    for (let j = i; j > 0; j--)
      if (arr[j - 1] <= arr[i]) {
        arr = [
          ...arr.slice(0, j),
          arr[i],
          ...arr.slice(j, i),
          ...arr.slice(i + 1),
        ];
        break;
      }
  return arr;
};
