import { TestsAndResults } from './testsgenerator';
import WorkerTS from './workerTS';

export type Options = { timeout: number };

const status = ['ok', 'error', 'timeout'] as const;
export type TestResults = {
  status: typeof status[number];
  time: number;
};

const pathToWorker = './tools/runSortModuleInThread.ts';

export default function TestWith(
  sortPath: string,
  testSet: TestsAndResults,
  options?: Options
): Promise<TestResults> {
  return new Promise(function (resolve, reject) {
    let timoutID;
    function res(args) {
      clearTimeout(timoutID);
      resolve(args);
    }
    function rej(args) {
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
