type SortingFn = (a: number, b: number) => number;

export type GeneratorParams = {
  fromVal: number;
  toVal: number;
  arraysAmount: number;
  arraysLength: number;
  sort?: SortingFn;
};

export type TestsAndResults = [
  ReadonlyArray<number>[],
  ReadonlyArray<number>[]
];

export default function TestsGenerator({
  fromVal,
  toVal,
  arraysAmount,
  arraysLength,
  sort,
}: GeneratorParams): TestsAndResults {
  const testsCases = new Array(arraysAmount),
    testsResults = new Array(arraysAmount);

  for (let i = 0; i < arraysAmount; ++i) {
    const testCase = new Array(arraysLength);

    for (let j = 0; j < arraysLength; ++j) {
      testCase[j] = Math.round(Math.random() * (toVal - fromVal)) + fromVal;
    }

    if (sort) {
      testCase.sort(sort);
    }

    testsCases[i] = Object.freeze(testCase);
    testsResults[i] = Object.freeze([...testCase].sort((a, b) => a - b));
  }

  Object.freeze(testsCases);
  Object.freeze(testsResults);

  return [testsCases, testsResults];
}
