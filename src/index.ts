/*
This is going to be a very rudimentary lexer for Okazaki. As always, this project is probably going to end up having a very large scope,
and the lexer is going to have to be re-written. Oh well.
*/

require('tsconfig-paths/register');
import Writer from 'code-block-writer';
import fs from 'fs';

import { exec } from '@utils/cpasync';

const main = async () => {
    console.log('Starting');
    const results = await exec('ls /');

    console.log(results.stdout);
}

main();