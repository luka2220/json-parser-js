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

/**
 * debug outputs expected values and recived values for debugging
 * @param {string} expected
 * @param {string} got
 */
function debug(expected, got) {
    console.log("debug");
    console.log(`expected = ${expected}, got = ${got}`)
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

test('test lexer with step2/valid.json', async () => {
    const input = await openFile('./test/data/step2/valid.json');
    console.log(input);

    const expected = [
        { expectedType: tokenType.LBRACE, expectedLiteral: "{" },
        { expectedType: tokenType.STRING, expectedLiteral: "key" },
        { expectedType: tokenType.COLON, expectedLiteral: ":" },
        { expectedType: tokenType.STRING, expectedLiteral: "value" },
        { expectedType: tokenType.RBRACE, expectedLiteral: "}" },
        { expectedType: tokenType.EOF, expectedLiteral: "" },
    ]

    const l = new Lexer(input);

    expected.forEach(({ expectedType, expectedLiteral }) => {
        const tok = l.nextToken();

        expect(tok.type).toBe(expectedType);
        expect(tok.literal).toBe(expectedLiteral);
    })

})

test('test lexer with step2/valid2.json', async () => {
    const input = await openFile('./test/data/step2/valid2.json');
    console.log(input);

    const expected = [
        { expectedType: tokenType.LBRACE, expectedLiteral: "{" },
        { expectedType: tokenType.STRING, expectedLiteral: "key" },
        { expectedType: tokenType.COLON, expectedLiteral: ":" },
        { expectedType: tokenType.STRING, expectedLiteral: "value" },
        { expectedType: tokenType.COMMA, expectedLiteral: "," },
        { expectedType: tokenType.STRING, expectedLiteral: "key2" },
        { expectedType: tokenType.COLON, expectedLiteral: ":" },
        { expectedType: tokenType.STRING, expectedLiteral: "value" },
        { expectedType: tokenType.RBRACE, expectedLiteral: "}" },
        { expectedType: tokenType.EOF, expectedLiteral: "" },
    ]

    const l = new Lexer(input);

    expected.forEach(({ expectedType, expectedLiteral }) => {
        const tok = l.nextToken();

        expect(tok.type).toBe(expectedType);
        expect(tok.literal).toBe(expectedLiteral);
    })
})

test('test lexer with step2/invalid.json', async () => {
    const input = await openFile('./test/data/step2/invalid.json');
    console.log(input);

    const expected = [
        { expectedType: tokenType.LBRACE, expectedLiteral: "{" },
        { expectedType: tokenType.STRING, expectedLiteral: "key" },
        { expectedType: tokenType.COLON, expectedLiteral: ":" },
        { expectedType: tokenType.STRING, expectedLiteral: "value" },
        { expectedType: tokenType.COMMA, expectedLiteral: "," },
        { expectedType: tokenType.RBRACE, expectedLiteral: "}" },
        { expectedType: tokenType.EOF, expectedLiteral: "" },
    ]

    const l = new Lexer(input);

    expected.forEach(({ expectedType, expectedLiteral }) => {
        const tok = l.nextToken();

        expect(tok.type).toBe(expectedType);
        expect(tok.literal).toBe(expectedLiteral);
    })
})

test('test lexer with step2/invalid2.json', async () => {
    const input = await openFile('./test/data/step2/invalid2.json');
    console.log(input);

    const expected = [
        { expectedType: tokenType.LBRACE, expectedLiteral: "{" },
        { expectedType: tokenType.STRING, expectedLiteral: "key" },
        { expectedType: tokenType.COLON, expectedLiteral: ":" },
        { expectedType: tokenType.STRING, expectedLiteral: "value" },
        { expectedType: tokenType.COMMA, expectedLiteral: "," },
        { expectedType: tokenType.ILLEGAL, expectedLiteral: "k" },
        { expectedType: tokenType.ILLEGAL, expectedLiteral: "e" },
        { expectedType: tokenType.ILLEGAL, expectedLiteral: "y" },
        { expectedType: tokenType.ILLEGAL, expectedLiteral: "2" },
        { expectedType: tokenType.COLON, expectedLiteral: ":" },
        { expectedType: tokenType.STRING, expectedLiteral: "value" },
        { expectedType: tokenType.RBRACE, expectedLiteral: "}" },
        { expectedType: tokenType.EOF, expectedLiteral: "" },
    ]

    const l = new Lexer(input);

    expected.forEach(({ expectedType, expectedLiteral }) => {
        const tok = l.nextToken();

        debug(expectedType, tok.type)
        debug(expectedLiteral, tok.literal)


        expect(tok.type).toBe(expectedType);
        expect(tok.literal).toBe(expectedLiteral);
    })
})
