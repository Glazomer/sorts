import { Result } from '../test';

export default function createTable(data: Result): string {
  const tables = [];
  for (const set in data) {
    const results = data[set],
      titile = `<h2>${set}</h2>\n`,
      keys = Object.keys(data[set][Object.keys(data[set])[0]]),
      table = [
        `<thead><tr>${
          '<th>' + ['sort', ...keys].join('</th><th>') + '</th>'
        }</tr></thead>`,
      ];
    table.push('<tbody>');
    for (const sort in results) {
      const values = Object.values(results[sort]).map((v) => v.toString());
      table.push(`<tr><td>${[sort, ...values].join('</td><td>')}</td></tr>`);
    }
    table.push('</tbody>');
    tables.push(`${titile}\n<table>${table.join('\n')}</table>`);
  }

  return tables.join('\n');
}
