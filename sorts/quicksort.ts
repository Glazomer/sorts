/* 
Implementation of in-place quick sort with stack.

  complexity:
    best time - O(N log N)
    avg time - O(N log N)
    worst time - O(N^2)
    memory - O(log N)
    in-place - Yes
    stable - No
*/

module.exports = function QuickSort(arr: number[]): number[] {
  const stack: number[][] = [];
  // There is reason to sort only if more than two elements
  if (arr.length > 1) stack.push([0, arr.length - 1]);
  // While we have unsorted subsequences, go on
  while (stack.length) {
    // First (left) and last (right) element of subsequences
    let [l, r] = stack.pop();
    // left and right are initial boundaries of array, because we will modify l and r
    const left = l,
      right = r,
      m = Math.floor((l + r) / 2); // Take middle element

    // Store [value, index]
    const threeValues = [
        [arr[l], l],
        [arr[m], m],
        [arr[r], r],
      ], // Getting index of middle element, so called pivot, so arr[leftIndex] < arr[middleIndex] < arr[rightIndex]
      middleIndex = threeValues.sort((a, b) => a[0] - b[0])[1][1];
    // Store our middle element in right most index
    [arr[right], arr[middleIndex]] = [arr[middleIndex], arr[right]];
    --r; // r or right most boundary reserved for our "middle" or pivot element, that will be swapped into correct place

    while (l <= r) {
      if (arr[l] >= arr[right]) {
        [arr[r], arr[l]] = [arr[l], arr[r]];
        --r;
      } else {
        ++l;
      }
    }

    [arr[l], arr[right]] = [arr[right], arr[l]];

    // If any subsequence has more than 1 element, sort it too
    if (l + 1 < right) stack.push([l + 1, right]);
    if (left < l - 1) stack.push([left, l - 1]);
  }
  return arr;
};
