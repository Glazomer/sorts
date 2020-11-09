import * as fs from 'fs';

type Sort = (arr: number[]) => number[];

const cd = fs.readdirSync('./'),
  filter = new Set(['test.ts']),
  tests = new Array(100)
    .fill(0)
    .map(() =>
      new Array(1000).fill(0).map(() => Math.round(Math.random() * 1000))
    ),
  results = tests.map((arr) => [...arr].sort((a, b) => a - b));

for (const file of cd) {
  if (file[0] != '.' && !filter.has(file)) {
    const sort = require(`./${file}`) as Sort;
    for (const i in tests) {
      const testCase = tests[i],
        result = results[i];
      console.assert(
        sort(testCase).toString() == result.toString(),
        `./${file}`
      );
    }
  }
}
