import { GeneratorParams } from './tools/testsgenerator';

const testSets: { [key: string]: GeneratorParams } = {
  randomTiny: {
    fromVal: -25,
    toVal: 25,
    arraysLength: 50,
    arraysAmount: 100000,
  },
  randomSmall: {
    fromVal: -250,
    toVal: 250,
    arraysLength: 500,
    arraysAmount: 10000,
  },
  randomMid: {
    fromVal: -2500,
    toVal: 2500,
    arraysLength: 5000,
    arraysAmount: 1000,
  },
  randomBig: {
    fromVal: -50_000,
    toVal: 50_000,
    arraysLength: 100_000,
    arraysAmount: 10,
  },
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
};

export default testSets;
