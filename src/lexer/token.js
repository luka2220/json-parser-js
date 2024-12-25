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
    STRING: '""',
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
