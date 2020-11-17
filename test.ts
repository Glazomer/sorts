import * as fs from 'fs';
import TestsGenerator, { TestsAndResults } from './tools/testsgenerator';
import TestWith, { Sort } from './tools/testwith';
import testConfig from './testconfig';

const dir = './sorts/',
  whiteList = process.argv.slice(2);

let cd = fs.readdirSync(dir).filter((f) => f[0] != '.');

if (whiteList.length) {
  cd = cd.filter((f) => whiteList.some((str) => f.indexOf(str) == 0));
}

const testSets: { [key: string]: TestsAndResults } = {};
for (const key in testConfig) {
  testSets[key] = TestsGenerator(testConfig[key]);
}

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
