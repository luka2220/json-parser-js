const ILLEGAL = "ILLEGAL"
const EOF = "EOF"
// Identifiers
const IDENT = "IDENT"
// Delimiters 
const COMMA = ","
const LBRACE = "{"
const RBRACE = "}"
const LSQBRACKET = "["
const RSQBRACKET = "]"

/**
 * Token class represents a single token of JSON
**/
class Token {
    /**
     * Creates a tokent
     * @param {string} tokenType
     * @param {string} literal
     **/
    constructor(tokenType, literal) {
        this.tokenType = tokenType
        this.literal = literal
    }
}
