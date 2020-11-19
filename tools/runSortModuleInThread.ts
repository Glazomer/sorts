const { isMainThread, parentPort, workerData } = require('worker_threads');

if (isMainThread) {
  throw new Error('This worker should not be used as a module!');
}

const { sortPath, testSet } = workerData,
  sort = require(sortPath),
  [tests, results] = testSet,
  result = { status: 'ok', time: 0 };

for (let i = 0; i < results.length; ++i) {
  results[i] = results[i].toString();
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
