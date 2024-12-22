import { test } from 'vitest';
import { readFile } from 'node:fs';
import { tokenizer } from '../src/lexer/lexer.js';

/**
 * openFile opens a JSON file and prepeares it for testing
 * @param {string} pathJson - path to the JSON file
 * @returns {Buffer<ArrayBufferLike>} Buffered array of the JSON file
 */
function openFile(pathJson) {
    readFile(pathJson, (err, data) => {
        if (err) throw err;
        return data;
    });
}

test('test tokenizer function with step1/valid.json', () => {
    const buf = openFile('./test/data/step1/valid.json');
});

test('test tokenizer fuction with step1/invalid.json', () => {
    const buf = openFile('./test/data/step1/invalid.json');
});
