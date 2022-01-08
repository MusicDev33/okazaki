import moo from 'moo';

let lexer = moo.compile({
    WS:      /[ \t]+/,
    comment: /\/\/.*?$/,
    number:  /0|[1-9][0-9]*/,
    string:  {match: /'(?:\\['\\]|[^\n'\\])*'/, value: s =>  s.slice(1, -1)},
    lparen:  '(',
    rparen:  ')',
    lmodbracket: '[!',
    lbracket: '[',
    rbracket: ']',
    identifier: /[a-zA-Z][a-zA-Z_\-0-9]*/,
    keyword: ['namespace'],
    NL:      { match: /\n/, lineBreaks: true },
});

export default lexer;

module.exports = lexer;
