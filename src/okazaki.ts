// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
// Bypasses TS6133. Allow declared but unused functions.
// @ts-ignore
function id(d: any[]): any { return d[0]; }
declare var lmodbracket: any;
declare var rbracket: any;
declare var identifier: any;
declare var WS: any;
declare var NL: any;

    import lexer from './lexer';

interface NearleyToken {
  value: any;
  [key: string]: any;
};

interface NearleyLexer {
  reset: (chunk: string, info: any) => void;
  next: () => NearleyToken | undefined;
  save: () => any;
  formatError: (token: never) => string;
  has: (tokenType: string) => boolean;
};

interface NearleyRule {
  name: string;
  symbols: NearleySymbol[];
  postprocess?: (d: any[], loc?: number, reject?: {}) => any;
};

type NearleySymbol = string | { literal: any } | { test: (token: any) => boolean };

interface Grammar {
  Lexer: NearleyLexer | undefined;
  ParserRules: NearleyRule[];
  ParserStart: string;
};

const grammar: Grammar = {
  Lexer: lexer,
  ParserRules: [
    {"name": "statements", "symbols": ["statement"], "postprocess": (data) => {return [data[0]]}},
    {"name": "statements", "symbols": ["statements", "newline", "statement"], "postprocess": (data) => {return [...data[0], data[2]]}},
    {"name": "statement", "symbols": ["nsdeclaration"], "postprocess": id},
    {"name": "statement", "symbols": ["importblock"], "postprocess": id},
    {"name": "statement", "symbols": ["_"], "postprocess": (data) => {return {type: 'emptyline'}}},
    {"name": "statement", "symbols": ["identifier"], "postprocess": id},
    {"name": "nsdeclaration", "symbols": [{"literal":"namespace"}, "_", "identifier"], "postprocess": 
        (data) => {
            return {
                type: 'namespace',
                nsName: data[2].value
            }
        }
                },
    {"name": "importblock", "symbols": [(lexer.has("lmodbracket") ? {type: "lmodbracket"} : lmodbracket), "identifier", (lexer.has("rbracket") ? {type: "rbracket"} : rbracket), "newline", "identifier"], "postprocess": 
        (data) => {
            return {
                type: 'importblock',
                imports: [data[4]]
            }
        }
                },
    {"name": "identifier", "symbols": [(lexer.has("identifier") ? {type: "identifier"} : identifier)], "postprocess": id},
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", (lexer.has("WS") ? {type: "WS"} : WS)], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "_", "symbols": ["_$ebnf$1"]},
    {"name": "__$ebnf$1", "symbols": [(lexer.has("WS") ? {type: "WS"} : WS)]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", (lexer.has("WS") ? {type: "WS"} : WS)], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "__", "symbols": ["__$ebnf$1"]},
    {"name": "newline", "symbols": [(lexer.has("NL") ? {type: "NL"} : NL)], "postprocess": (data) => {return data[0]}}
  ],
  ParserStart: "statements",
};

export default grammar;
