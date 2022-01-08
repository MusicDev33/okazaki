@preprocessor typescript

@{%
    import lexer from './lexer';
%}

@lexer lexer

statements 
    -> statement {% (data) => {return [data[0]]} %} 
    | statements newline statement {% (data) => {return [...data[0], data[2]]} %}

statement 
    -> nsdeclaration {% id %} 
    | importblock {% id %} 
    | _ {% (data) => {return {type: 'emptyline'}} %}
    | identifier {% id %}

nsdeclaration
    -> "namespace" _ identifier
        {%
            (data) => {
                return {
                    type: 'namespace',
                    nsName: data[2].value
                }
            }
        %}

importblock
    -> %lmodbracket identifier %rbracket newline identifier
        {%
            (data) => {
                return {
                    type: 'importblock',
                    imports: [data[4]]
                }
            }
        %}

identifier -> %identifier {% id %}

_ -> %WS:*

__ -> %WS:+

newline -> %NL {% (data) => {return data[0]} %}