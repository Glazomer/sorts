import { Result } from '../test';

export default function createTable(data: Result): string {
  const tables = [];
  for (const set in data) {
    const results = data[set],
      titile = `## ${set}\n`,
      keys = Object.keys(data[set][Object.keys(data[set])[0]]),
      table = [
        ['sort', ...keys].join('|'),
        new Array(keys.length + 1).fill('-').join('|'),
      ];
    for (const sort in results) {
      const values = Object.values(results[sort]).map((v) => v.toString());
      table.push([sort, ...values].join('|'));
    }
    tables.push(`${titile}\n${table.join('\n')}`);
  }

  return tables.join('\n');
}
