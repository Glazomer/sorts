# Quick sort

# Wiki

[Quicksort](https://en.wikipedia.org/wiki/Quicksort) (sometimes called partition-exchange sort) is an efficient sorting algorithm. Developed by British computer scientist Tony Hoare in 1959 and published in 1961, it is still a commonly used algorithm for sorting. When implemented well, it can be about two or three times faster than its main competitors, merge sort and heapsort.

## Complexity (moving elements):

**Best**: O(N \* log<sub>2</sub>(N) / 2)
**Avg**: O(N \* log<sub>2</sub>(N))
**Worst**: O(N<sup>2</sup> / 2)

## Complexity (moving space):

**Worst**: O(log<sub>2</sub>(N))

## Conclusion

This algorithm can be used for standard libraries, because it takes at most O(log<sub>2</sub>(N)) space.

Using this algorithm is inefficient for small and big sized arrays, but efficient on middle sized arrays, because for big arrays it has O(N<sup>2</sup> / 2) complexity, while for small arrays we have better alternative.
