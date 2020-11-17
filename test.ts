import * as fs from 'fs';
import TestsGenerator, { TestsAndResults } from './tools/testsgenerator';
import TestWith, { Sort } from './tools/testwith';

const dir = './sorts/',
  whiteList = process.argv.slice(2);

let cd = fs.readdirSync(dir).filter((f) => f[0] != '.');

if (whiteList.length) {
  cd = cd.filter((f) => whiteList.some((str) => f.indexOf(str) == 0));
}

const testSets: { [key: string]: TestsAndResults } = {
  sortedMid: TestsGenerator({
    fromVal: -2000,
    toVal: 2000,
    arraysLength: 4000,
    arraysAmount: 1000,
    sort: (a, b) => a - b,
  }),
  reverseMid: TestsGenerator({
    fromVal: -2000,
    toVal: 2000,
    arraysLength: 4000,
    arraysAmount: 1000,
    sort: (a, b) => b - a,
  }),
  fewRandomMid: TestsGenerator({
    fromVal: -100,
    toVal: 100,
    arraysLength: 4000,
    arraysAmount: 1000,
  }),
  randomTiny: TestsGenerator({
    fromVal: -20,
    toVal: 20,
    arraysLength: 40,
    arraysAmount: 100000,
  }),
  randomSmall: TestsGenerator({
    fromVal: -200,
    toVal: 200,
    arraysLength: 400,
    arraysAmount: 10000,
  }),
  randomMid: TestsGenerator({
    fromVal: -2000,
    toVal: 2000,
    arraysLength: 4000,
    arraysAmount: 1000,
  }),
  randomBig: TestsGenerator({
    fromVal: -10_000,
    toVal: 10_000,
    arraysLength: 5000,
    arraysAmount: 1000,
  }),
};

const sorts: Sort[] = [];

for (const file of cd) {
  sorts.push(require(dir + file) as Sort);
}

for (const set in testSets) {
  for (const sort of sorts) {
    const [immutableTests, result] = testSets[set],
      tests = immutableTests.map((test) => [...test]);

    const [sec, nsec] = TestWith(sort, tests, result);

    const totalTime = sec + nsec / 10 ** 9;
    console.log(
      `Finished ${set} tests set on ${sort.name} in ${totalTime} seconds`
    );
  }
  console.log('\n#############################################\n');
}

console.log('Finished all tests');
