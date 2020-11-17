# Heap sort

## Wiki

In computer science, [heapsort](https://en.wikipedia.org/wiki/Heapsort) is a comparison-based sorting algorithm. Heapsort can be thought of as an improved selection sort: like selection sort, heapsort divides its input into a sorted and an unsorted region, and it iteratively shrinks the unsorted region by extracting the largest element from it and inserting it into the sorted region. Unlike selection sort, heapsort does not waste time with a linear-time scan of the unsorted region; rather, heap sort maintains the unsorted region in a heap data structure to more quickly find the largest element in each step.

## Complexity (moving elements)

**Best time**: O(N + N \* log<sub>2</sub>(N) / 2)
**Avg time**: O(2 \* N + N \* log<sub>2</sub>(N) / 2)
**Worst time**: O(2 \* N + N \* log<sub>2</sub>(N) / 2)

## Complexity (moving space):

**Worst**: O(1)

## Conclusion

This algorithm can be used for standard libraries, because it takes no extra space.

Using this algorithm is inefficient for small and middle sized arrays, but efficient on big arrays, because building heap requires O(2\*N) time on avarage.
