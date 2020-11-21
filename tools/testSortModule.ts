import { TestsAndResults } from './testsGenerator';
import WorkerTS from './workerTS';
import { TestResults } from './runSortModuleInThread';

export type Options = { timeout: number };

const pathToWorker = './tools/runSortModuleInThread.ts';

export default function TestWith(
  sortPath: string,
  testSet: TestsAndResults,
  options?: Options
): Promise<TestResults> {
  return new Promise(function (resolve, reject) {
    let timoutID;
    function res(args: TestResults) {
      clearTimeout(timoutID);
      resolve(args);
    }
    function rej(args: TestResults) {
      clearTimeout(timoutID);
      reject(args);
    }

    const worker = WorkerTS(pathToWorker, {
      workerData: { sortPath, testSet },
    });
    worker.on('message', res);
    worker.on('error', rej);

    if (options && options.timeout) {
      timoutID = setTimeout(() => {
        worker.terminate();
        res({
          status: 'timeout',
          time: options.timeout / 1000,
        });
      }, options.timeout);
    }
  });
}
