# My sort algorithms

My own implemented main sorting algorithms.

## Installation and testing

Run

```
npm i
npm run test
```

`npm run test` running script file, that fetches all modules in `./sorts` folder and test it.
Our tests are randomly generated `100` arrays with size of `100` with random values in range `[-500; 500]`.

## Requirments

I implemented all of my sorting algorithms using typescript. In order to run it, I need:

1. [TypeScript](https://www.npmjs.com/package/typescript) as a base for typescript compilers (we will use ts-node).
2. [ts-node](https://www.npmjs.com/package/ts-node) is a run enviroment like node-js, but with built-in ts compiler.
3. [node types](https://www.npmjs.com/package/@types/node) used for debuging purposes, so your IDE will fetch types for basic node-js modules.

## Sorts info

1. [Heap sort](./info/heapsort.md)
2. [Insertion sort](./iinfo/nsertionsort.md)
3. [Merge sort](./info/mergesort.md)
4. [Quick sort](./info/quicksort.md)
