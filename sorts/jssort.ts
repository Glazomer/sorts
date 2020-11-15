/* 
Default js sort.
*/

module.exports = function InsertionSort(arr: number[]): number[] {
  return arr.sort((a, b) => a - b);
};
