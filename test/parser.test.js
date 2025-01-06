import { expect, test } from 'vitest';
import { Parser } from '../src/parser/parser';

test('Basic parser test', () => {
  const json = `
    { "key": -1200,
      "key 2": 0.99999
    }
    `;

  const expected = {
    "key": -1200,
    "key 2": 0.99999
  }

  const obj = Parser.parse(json);
  expect(obj).toBe(expected);
});
