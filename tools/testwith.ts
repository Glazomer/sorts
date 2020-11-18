import * as fs from 'fs';

export type Sort = (arr: number[]) => number[];

export default function TestWith(
  sort: Sort,
  tests: number[][],
  results: string[],
  readonlyTests?: ReadonlyArray<number>[]
): [number, number] {
  const [secStart, nsecStart] = process.hrtime();
  for (let i = 0; i < tests.length; ++i) {
    if (sort(tests[i]).toString() !== results[i]) {
      const errorMsg = `Wrong result with function ${sort.name}! (see log.txt file for more details)`;

      fs.appendFileSync(
        './log.txt',
        JSON.stringify({
          errtype: 'Wrong answer!',
          initial: readonlyTests ? readonlyTests[i] : 'Copy was not provided!',
          expected: `[${results[i]}]`,
          recieved: tests[i],
        }) + '\n'
      );
      throw errorMsg;
    }
  }
  const [secEnd, nsecEnd] = process.hrtime();
  return [secEnd - secStart, nsecEnd - nsecStart];
}
