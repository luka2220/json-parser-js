import { Lexer } from "./lexer/lexer.js";

(function() {
	const input = `{
		key: "value"
	}
	`

	const lexer = new Lexer(input);
	console.log(`current token = ${lexer.ch}`);
	console.log(`peek token = ${lexer.peek().charCodeAt()}`);
})();
