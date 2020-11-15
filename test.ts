import * as fs from 'fs';

type Sort = (arr: number[]) => number[];

const dir = './sorts/',
  cd = fs.readdirSync(dir),
  tests = new Array(1000)
    .fill(0)
    .map(() =>
      new Array(1000)
        .fill(0)
        .map(() => Math.round(Math.random() * 10000) - 5000)
    ),
  results = tests.map((arr) => [...arr].sort((a, b) => a - b));

tests.push([], [0]); // testing edge case
results.push([], [0]);

for (const file of cd) {
  if (file[0] != '.') {
    const [secStart, nsecStart] = process.hrtime();
    const sort = require(dir + file) as Sort;
    for (const i in tests) {
      const testCase = tests[i],
        result = results[i];
      console.assert(
        sort(testCase).toString() == result.toString(),
        `./${file} failed to test ${testCase.toString()}`
      );
    }
    const [secEnd, nsecEnd] = process.hrtime(),
      time = secEnd - secStart + (nsecEnd - nsecStart) / 10 ** 9;
    console.log(`Finished ${file} in ${time} seconds`);
  }
}

console.log('Finished all tests');
