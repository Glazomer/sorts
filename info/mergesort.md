# Merge sort

## Wiki

In computer science, [merge sort](https://en.wikipedia.org/wiki/Merge_sort) (also commonly spelled mergesort) is an efficient, general-purpose, comparison-based sorting algorithm. Most implementations produce a stable sort, which means that the order of equal elements is the same in the input and output. Merge sort is a divide and conquer algorithm that was invented by John von Neumann in 1945.

## Complexity (moving elements)

**Best time**: O(2 \* N \* log<sub>2</sub>(N))
**Avg time**: O(2 \* N \* log<sub>2</sub>(N))
**Worst time**: O(2 \* N \* log<sub>2</sub>(N))

## Complexity (moving space):

**Worst**: O(N)

## Conclusion

This algorithm can not be used for standard libraries, because it takes O(N) extra space.

Using this algorithm is inefficient for middle and big sized arrays, because of **avg** and **worst** complexity, but there better options for small arrays.
