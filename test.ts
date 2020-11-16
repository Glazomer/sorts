import * as fs from 'fs';

type Sort = (arr: number[]) => number[];

const dir = './sorts/',
  cd = fs.readdirSync(dir),
  whileList = process.argv.slice(2),
  testsCases = new Array(1000)
    .fill(0)
    .map(() =>
      new Array(5000)
        .fill(0)
        .map(() => Math.round(Math.random() * 10000) - 5000)
    ),
  testsResults = testsCases.map((arr) => [...arr].sort((a, b) => a - b));

testsCases.push([], [0]); // testing edge cases
testsResults.push([], [0]);

for (const file of cd) {
  if (
    file[0] != '.' &&
    (!whileList.length || whileList.some((str) => file.indexOf(str) == 0))
  ) {
    const sort = require(dir + file) as Sort,
      tests = testsCases.map((test) => [...test]),
      [secStart, nsecStart] = process.hrtime();

    for (const i in tests) {
      const testCase = tests[i],
        testResult = testsResults[i];
      console.assert(
        sort(testCase).toString() == testResult.toString(),
        `./${file} failed to test ${testCase.toString()}`
      );
    }

    const [secEnd, nsecEnd] = process.hrtime(),
      time = secEnd - secStart + (nsecEnd - nsecStart) / 10 ** 9;

    console.log(`Finished ${file} in ${time} seconds`);
  }
}

console.log('Finished all tests');
