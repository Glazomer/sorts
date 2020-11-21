import { TestsAndResults } from './testsGenerator';

const { isMainThread, parentPort, workerData } = require('worker_threads');

if (isMainThread) {
  throw new Error('This worker should not be used as a module!');
}

const status = ['ok', 'error', 'timeout'] as const;
export type TestResults = {
  status: typeof status[number];
  time: number;
};

const { sortPath, testSet } = workerData as {
    sortPath: string;
    testSet: TestsAndResults;
  },
  sort = require(sortPath),
  [tests, resultsArr] = testSet,
  results = new Array<string>(resultsArr.length),
  result: TestResults = { status: 'ok', time: 0 };

for (let i = 0; i < results.length; ++i) {
  results[i] = resultsArr[i].toString();
}

const [secStart, nsecStart] = process.hrtime();

for (let i = 0; i < tests.length; ++i) {
  if (sort(tests[i]).toString() != results[i]) {
    result.status = 'error';
    break;
  }
}

const [secEnd, nsecEnd] = process.hrtime();
result.time = secEnd - secStart + (nsecEnd - nsecStart) / 1e9;

parentPort.postMessage(result);
