// This is going to pretty much be a copy of child-process-async, I'm just kind of tired of 
// pulling in a dependency for something that can be done in like, 10 lines of code.

import child from 'child_process';

const exec = (command: string, options: any = {}): Promise<{ stdout:Buffer|string, stderr:Buffer|string }> => {
    return new Promise((resolve, reject) => {
        child.exec(command, options, (err, stdout, stderr) => {
            if (err) return reject(err);

            resolve({stdout, stderr});
        });
    });
}

export { exec };
