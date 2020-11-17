import * as fs from 'fs';

export type Sort = (arr: number[]) => number[];

export default function TestWith(
  sort: Sort,
  tests: number[][],
  results: string[]
): [number, number] {
  const [secStart, nsecStart] = process.hrtime();
  for (let i = 0; i < tests.length; ++i) {
    if (sort(tests[i]).toString() !== results[i]) {
      fs.appendFile(
        'log.txt',
        `#${i}: Expected ${results[i]}\n, but got ${sort(tests[i]).toString()}`,
        function (err) {
          if (err) throw err;
        }
      );
      throw `Wrong result with function ${sort.name}! (see log.txt file for more details)`;
    }
  }
  const [secEnd, nsecEnd] = process.hrtime();
  return [secEnd - secStart, nsecEnd - nsecStart];
}
