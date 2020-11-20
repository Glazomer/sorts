import * as fs from 'fs';
import TestsGenerator, { TestsAndResults } from './tools/testsGenerator';
import TestWith from './tools/testSortModule';
import testConfig from './testconfig';
import createTableMD from './tools/createTableMD';
import createTableHTML from './tools/createTableHTML';
import { TestResults } from './tools/testSortModule';

export type Result = { [key: string]: { [key: string]: TestResults } };

async function main(argv = process.argv) {
  const dir = './sorts/',
    whiteList = argv.slice(2);

  let cd = fs.readdirSync(dir).filter((f) => f[0] != '.');

  if (whiteList.length) {
    cd = cd.filter((f) => whiteList.some((str) => f.indexOf(str) == 0));
  }

  const testSets: { [key: string]: TestsAndResults } = {};
  for (const key in testConfig) {
    testSets[key] = TestsGenerator(testConfig[key]);
  }

  const results = {} as any;
  for (const set in testSets) {
    const testSet = testSets[set];
    results[set] = {};
    for (const sortFile of cd) {
      const sortPath = '../sorts/' + sortFile,
        sortName = sortFile.split('.')[0];

      const res = await TestWith(sortPath, testSet, { timeout: 15_000 });
      res.time = Math.round(res.time * 1e7) / 1e7;
      results[set][sortName] = res;
    }
    console.log(set);
    console.table(results[set]);
  }

  fs.writeFileSync('./test_results.md', createTableMD(results));
  fs.writeFileSync('./test_results.html', createTableHTML(results));
}

main();
