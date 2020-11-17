import { GeneratorParams } from './tools/testsgenerator';

const testSets: { [key: string]: GeneratorParams } = {
  sortedMid: {
    fromVal: -2000,
    toVal: 2000,
    arraysLength: 4000,
    arraysAmount: 1000,
    sort: (a, b) => a - b,
  },
  reverseMid: {
    fromVal: -2000,
    toVal: 2000,
    arraysLength: 4000,
    arraysAmount: 1000,
    sort: (a, b) => b - a,
  },
  fewRandomMid: {
    fromVal: -100,
    toVal: 100,
    arraysLength: 4000,
    arraysAmount: 1000,
  },
  randomTiny: {
    fromVal: -20,
    toVal: 20,
    arraysLength: 40,
    arraysAmount: 100000,
  },
  randomSmall: {
    fromVal: -200,
    toVal: 200,
    arraysLength: 400,
    arraysAmount: 10000,
  },
  randomMid: {
    fromVal: -2000,
    toVal: 2000,
    arraysLength: 4000,
    arraysAmount: 1000,
  },
  randomBig: {
    fromVal: -10_000,
    toVal: 10_000,
    arraysLength: 5000,
    arraysAmount: 1000,
  },
};

export default testSets;
