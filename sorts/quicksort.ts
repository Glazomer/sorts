/* 
Implementation of in-place quick sort with stack.

  complexity:
    best time - O(N log N)
    avg time - O(N log N)
    worst time - O(N^2)
    
    memory - O(log N)
    stable - No
*/

module.exports = function QuickSort(arr: number[]): number[] {
  const stack: number[][] = [];
  if (arr.length > 1) stack.push([0, arr.length - 1]);
  while (stack.length) {
    // left and right boundaries of unsorted subsequences
    const [left, right] = stack.pop();
    let l = left,
      r = right,
      m = Math.floor((l + r) / 2);

    const threeValues = [l, m, r],
      pivotIndex = threeValues.sort((a, b) => arr[a] - arr[b])[1];
    // Getting index of middle element, so called pivot, that arr[0] < arr[pivotIndex] < arr[2]

    // Store our middle element in right most index
    [arr[right], arr[pivotIndex]] = [arr[pivotIndex], arr[right]];
    --r; // r or right most boundary reserved for our "middle" or pivot element, that will be swapped into correct place

    while (l <= r) {
      if (arr[l] >= arr[right]) {
        [arr[r], arr[l]] = [arr[l], arr[r]];
        --r;
      } else {
        ++l;
      }
    }

    // Returing pivot value to it correct place
    [arr[l], arr[right]] = [arr[right], arr[l]];

    // If any subsequence has more than 1 element, sort it too
    if (l + 1 < right) stack.push([l + 1, right]);
    if (left < l - 1) stack.push([left, l - 1]);
  }
  return arr;
};
