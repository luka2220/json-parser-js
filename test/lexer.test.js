import { expect, test } from 'vitest';
import { readFile } from 'node:fs/promises';
import { tokenType } from '../src/lexer/token.js';
import { Lexer } from '../src/lexer/lexer.js';

/**
 * openFile opens a JSON file and prepeares it for testing
 * @param {string} pathJson - path to the JSON file
 * @returns {Promise<string>} - string representation of the JSON file
 */
async function openFile(pathJson) {
    try {
        const data = await readFile(pathJson);
        return data.toString('utf-8');
    } catch (error) {
        throw new Error(`Unable to open file: ${error}`);
    }
}

test('test lexer with step1/valid.json', async () => {
    const input = await openFile('./test/data/step1/valid.json');
    console.log(input);

    const expected = [
        { expectedType: tokenType.LBRACE, expectedLiteral: '{' },
        { expectedType: tokenType.RBRACE, expectedLiteral: '}' },
        { expectedType: tokenType.EOF, expectedLiteral: '' },
    ];

    const l = new Lexer(input);

    expected.forEach(({ expectedType, expectedLiteral }) => {
        const tok = l.nextToken();

        expect(tok.type).toBe(expectedType);
        expect(tok.literal).toBe(expectedLiteral);
    });
});

test('test lexer with step1/invalid.json', async () => {
    const input = await openFile('./test/data/step1/invalid.json');
    console.log(input);

    const expected = [
        { expectedType: tokenType.EOF, expectedLiteral: "" },
    ]

    const l = new Lexer(input);

    expected.forEach(({ expectedType, expectedLiteral }) => {
        const tok = l.nextToken();

        expect(tok.type).toBe(expectedType);
        expect(tok.literal).toBe(expectedLiteral);
    })
});
