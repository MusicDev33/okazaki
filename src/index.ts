#!/usr/bin/env node

/*
This is going to be a very rudimentary lexer for Okazaki. As always, this project is probably going to end up having a very large scope,
and the lexer is going to have to be re-written. Oh well.
*/

require('tsconfig-paths/register');
import Writer from 'code-block-writer';
import path from 'path';
import { promises as fs } from 'fs';
import lexer from './lexer';

const main = async () => {
    console.log('Starting');

    console.log(process.argv);
    console.log(path.resolve());
    const text = await (await fs.readFile('test/main.okz')).toString();
    // const text = `'test'`;

    lexer.reset(text);

    while (true) {
        const token = lexer.next();

        if (!token) {
            break;
        }

        console.log(token);
    }
}

main();