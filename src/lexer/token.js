/**
 * @typedef {Object} tokenType
 * @property {string} ILLEGAL
 * @property {string} EOF
 * @property {string} IDENT
 * @property {string} COLON
 * @property {string} COMMA
 * @property {string} LBRACE
 * @property {string} RBRACE
 * @property {string} LSQBRACKET
 * @property {string} RSQBRACKET
 * @property {string} STRING
 * @property {string} BOOLEAN
 * @property {string} NULL
 * @property {string} NUMBER
 */

/**
 * @type {tokenType}
 */
export const tokenType = {
    ILLEGAL: 'ILLEGAL',
    EOF: 'EOF',
    // Identifiers
    IDENT: 'IDENT',
    // Delimiters
    COLON: ':',
    COMMA: ',',
    LBRACE: '{',
    RBRACE: '}',
    LSQBRACKET: '[',
    RSQBRACKET: ']',
    // Data Types
    STRING: 'STRING',
    BOOLEAN: 'BOOLEAN',
    NULL: 'NULL',
    NUMBER: 'NUMBER',
};

/**
 * @typedef {Object} token
 * @property {tokenType} type
 * @property {string} literal
 */

/**
 * Token class represents a single token of JSON
 * @type {token}
 **/
export class Token {
    /**
     * Creates a tokent
     * @param {tokenType} type
     * @param {string} literal
     **/
    constructor(type, literal) {
        this.type = type;
        this.literal = literal;
    }
}
