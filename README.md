## Okazaki

#### Setting up main and imports

To start, Okazaki needs a file called `main.okz`. This is the starting point for Okazaki. 

In Okazaki, you can set up imports like so:

```
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

And yes, Okazaki will try to import and use packages the correct way when it can.
