import { GeneratorParams } from './tools/testsGenerator';

const testSets: { [key: string]: GeneratorParams } = {
  reverseMid: {
    fromVal: -2500,
    toVal: 2500,
    arraysLength: 5000,
    arraysAmount: 1000,
    sort: (a, b) => b - a,
  },
  sortedMid: {
    fromVal: -2500,
    toVal: 2500,
    arraysLength: 5000,
    arraysAmount: 1000,
    sort: (a, b) => a - b,
  },
  fewRandomMid: {
    fromVal: -100,
    toVal: 100,
    arraysLength: 5000,
    arraysAmount: 1000,
  },
  spreadRandomMid: {
    fromVal: -1000000,
    toVal: 1000000,
    arraysLength: 5000,
    arraysAmount: 1000,
  },
  randomTiny: {
    fromVal: -25,
    toVal: 25,
    arraysLength: 50,
    arraysAmount: 100_000,
  },
  randomSmall: {
    fromVal: -250,
    toVal: 250,
    arraysLength: 500,
    arraysAmount: 10_000,
  },
  randomMid: {
    fromVal: -2500,
    toVal: 2500,
    arraysLength: 5000,
    arraysAmount: 1000,
  },
  randomBig: {
    fromVal: -25_000,
    toVal: 25_000,
    arraysLength: 50_000,
    arraysAmount: 100,
  },
  randomGiant: {
    fromVal: -500_000,
    toVal: 500_000,
    arraysLength: 500_000,
    arraysAmount: 10,
  },
};

export default testSets;
