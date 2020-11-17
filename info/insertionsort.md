# Insertion sort

## Wiki

[Insertion sort](https://en.wikipedia.org/wiki/Insertion_sort) is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort. However, insertion sort provides several advantages:

1. Simple implementation three-line C version, and a five-line optimized version
2. Efficient for (quite) small data sets, much like other quadratic sorting algorithms
3. More efficient in practice than most other simple quadratic (i.e., O(n2)) algorithms such as selection sort or bubble sort
4. Stable
5. In-place
6. Can sort as receives it

## Complexity (moving elements)

**Best time**: O(N)
**Avg time**: O(N<sup>2</sup> / 4)
**Worst time**: O(N<sup>2</sup> / 2)

## Complexity (moving space):

**Worst**: O(1)

## Conclusion

This algorithm can be used for standard libraries, because it takes no extra space.

Using this algorithm is inefficient for middle and big sized arrays, but efficient on small arrays, because on avarage we perform N<sup>2</sup>/4 operations, and if number of elements small, that constant devision reduces sorting speed dramatically.
