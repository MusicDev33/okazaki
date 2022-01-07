## Okazaki

#### Setting up main and imports

To start, Okazaki needs a file called `main.okz`. This is the starting point for Okazaki. The first line is the namespace line,
which is the project name.

In Okazaki, you can set up imports like so:

```
namespace okztest

[imports]
tsconfig-paths
cors
express@4.0.0
```

This will populate the `package.json` with dependencies, and if you put an @ symbol after the package name, you can specify a version.
The imports declaration will always be the first thing in the `main.okz` file. Using the `!` flag in front of imports will auto-import 
all the files into index.js with camel case.

main.okz
```
namespace okztest

[!imports]
tsconfig-paths
cors
express@4.0.0
cookie-parser
dotenv
dotenv-defaults
```

index.js
```js
require('tsconfig-paths/register');
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

dotenv.config();
require('dotenv-defaults/config');
```

And yes, Okazaki will try to import and use packages the correct way when it can. If NPM doesn't have type definitions for the package, it will be default imported,
else the package will be a named import. You might have to fix up some of imports, most likely by either importing `@types` packages or by changing import names.


