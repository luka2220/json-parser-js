import { tokenType, Token } from './token.js';

/** Lexer takes in JSON source code and turns it into tokens **/
export class Lexer {
    /** Creates a lexer
     * @param {string} input
     * @param {number} position
     * @param {number} readPos
     * @param {string} ch
     */
    constructor(input) {
        this.input = input;
        this.position = 0;
        this.readPosition = 0;

        this.#readChar();
    }

    /**
     * nextToken gets and returns the next token from the input
     * @returns {Token}
     */
    nextToken() {
        let token;

        this.#skipWhitespace();

        switch (this.ch) {
            case ',':
                token = this.#newToken(tokenType.COMMA, this.ch);
                break;
            case '{':
                token = this.#newToken(tokenType.LBRACE, this.ch);
                break;
            case '}':
                token = this.#newToken(tokenType.RBRACE, this.ch);
                break;
            case '[':
                token = this.#newToken(tokenType.LSQBRACKET, this.ch);
                break;
            case ']':
                token = this.#newToken(tokenType.RSQBRACKET, this.ch);
                break;
            case ':':
                token = this.#newToken(tokenType.COLON, this.ch);
                break;
            case '"':
                let str = this.#readString();
                token = this.#newToken(tokenType.STRING, str);
                break;
            case 't':
            case 'f':
                const result = this.#readBool();

                if (result !== null) {
                    return this.#newToken(tokenType.BOOLEAN, result);
                }
            case 0:
                token = this.#newToken(tokenType.EOF, '');
                break;
            default:
                token = this.#newToken(tokenType.ILLEGAL, this.ch);
                break;
        }

        this.#readChar();
        return token;
    }

    /** Advances the position in the lexer and get the next char from the input */
    #readChar() {
        if (this.readPosition >= this.input.length) {
            this.ch = 0; // set to ascii null
        } else {
            this.ch = this.input[this.readPosition];
        }

        this.position = this.readPosition;
        this.readPosition++;
    }

    /**
     * #newToken creates a new token type
     * @param {tokenType} tokenType
     * @param {string} ch
     * @returns {Token}
     */
    #newToken(tokenType, ch) {
        return new Token(tokenType, ch);
    }

    /** #skipWhiteSpace advances the read position if the current chat is ' ', '\t', '\n', '\r' */
    #skipWhitespace() {
        while (
            this.ch === ' ' ||
            this.ch === '\t' ||
            this.ch === '\n' ||
            this.ch === '\r'
        ) {
            this.#readChar();
        }
    }

    /** #readString creates a string token by read all content from "..."
     * @returns {string}
     */
    #readString() {
        this.#readChar();
        let result = '';

        while (this.ch !== '"') {
            result += this.ch;
            this.#readChar();
        }

        return result;
    }


    /** #readBool creates a boolean token
     * @returns {string | null}
     */
    #readBool() {
        if (this.ch === 't') {
            let i = 0;
            const t = "true";

            while (this.ch === t[i] && i < t.length) {
                i += 1;
                this.#readChar()
            }

            if (t.length === i) {
                return "true"
            }
        } else if (this.ch === 'f') {
            let i = 0;
            const f = "false";

            while (this.ch == f[i] && i < f.length) {
                i += 1;
                this.#readChar();
            }

            if (f.length === i) {
                return "false"
            }
        }

        return null;
    }
}
