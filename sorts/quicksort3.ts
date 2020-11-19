/* 
Implementation of in-place quick sort with stack and three pivots.

  complexity:
    best time - O(N log N)
    avg time - O(N log N)
    worst time - O(N^2)
    
    memory - O(log N)
    stable - No
*/

module.exports = function QuickSort3(arr: number[]): number[] {
  const stack: number[][] = [];

  if (arr.length > 1) stack.push([0, arr.length - 1]);

  while (stack.length) {
    // Left and right boundaries of unsorted subsequences, they also going to be our pivots.
    const [left, right] = stack.pop();
    let l = left,
      r = right,
      i = l + 1;

    // Getting the best possible pivots
    if (arr[left] > arr[right]) {
      [arr[right], arr[left]] = [arr[left], arr[right]];
    }

    // If we have reverse sorted Array we will not have O(N^2) if we choose pivots from middle
    const mid = Math.floor((right - left) / 3) + left;
    if (arr[left] < arr[mid] && arr[mid] < arr[right]) {
      if (arr[right] - arr[mid] > arr[mid] - arr[left]) {
        [arr[left], arr[mid]] = [arr[mid], arr[left]];
      } else {
        [arr[right], arr[mid]] = [arr[mid], arr[right]];
      }
    }

    // Literally just "Dutch flag problem"
    while (i < r) {
      if (arr[right] < arr[i]) {
        --r;
        [arr[r], arr[i]] = [arr[i], arr[r]];
      } else if (arr[i] < arr[left] && i != l) {
        ++l;
        [arr[l], arr[i]] = [arr[i], arr[l]];
      } else {
        ++i;
      }
    }

    // Returing pivots value to their correct places
    [arr[l], arr[left]] = [arr[left], arr[l]];
    [arr[r], arr[right]] = [arr[right], arr[r]];

    // If any subsequence has more than 1 element, sort it too
    if (left < l - 1) stack.push([left, l - 1]);
    if (l + 1 < r - 1) stack.push([l + 1, r - 1]);
    if (r + 1 < right) stack.push([r + 1, right]);
  }
  return arr;
};
