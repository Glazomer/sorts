/* 
Implementation of in-place heap sort.

  complexity:
    best time - O(N log N)
    avg time - O(N log N)
    worst time - O(N log N)

    memory - O(1)
    stable - No
*/

module.exports = function HeapSort(arr: number[]): number[] {
  const left = (i: number): number => i * 2 + 1,
    right = (i: number): number => i * 2 + 2,
    swap = (i: number, j: number): number[] =>
      ([arr[i], arr[j]] = [arr[j], arr[i]]);

  function heapifyBottom(i: number, limit = arr.length): void {
    while (1) {
      // pretend if we try to acces to element below limit it's undefined
      const l = left(i) < limit ? left(i) : arr.length,
        r = right(i) < limit ? right(i) : arr.length;
      if (arr[r] > arr[i] && arr[r] >= arr[l]) {
        swap(i, r);
        i = r;
      } else if (arr[l] > arr[i] && (arr[l] >= arr[r] || !(r in arr))) {
        swap(i, l);
        i = l;
      } else {
        break;
      }
    }
  }

  // Making heap
  // In order to iterage from last to first index
  arr.reduceRight((_, __, i): any => heapifyBottom(i), 0);

  for (let i = 0; i < arr.length; ++i) {
    const last = arr.length - 1 - i;
    [arr[last], arr[0]] = [arr[0], arr[last]];
    heapifyBottom(0, last); // passing limit pretending our array ends there
  }

  return arr;
};
