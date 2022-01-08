import { promises as fs } from 'fs';
import nearley from 'nearley';
import { default as grammar } from './okazaki';

// Create a Parser object from our grammar.
const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

const file = process.argv[2];

const main = async () => {
    const code = await (await fs.readFile(`test/${file}`)).toString();

    parser.feed(code);
    const results = parser.results;

    if (results.length > 1) {
        console.log('Ambiguous grammar.');
    } else if (results.length == 1) {
        const outputFile = file.replace('.okz', '.ast');
        try {
            await fs.unlink(outputFile);
        } catch (e) {
            
        }

        await fs.writeFile(outputFile, JSON.stringify(results[0], null, '  '));
        console.log(`Contents written to ${outputFile}`);
    } else {
        console.log('ERROR: Something went wrong.');
    }
}

main();
