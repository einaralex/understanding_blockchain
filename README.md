
yarn install

yarn start


`Tsconfig.json`

| CompilerOptions |  |
|---|---|
| module: "commonjs" | CommonJS module loader for Node.js |
| target: "es6" | ECMAScript target version |
| outDir: "build" | Compiled JS files location |
| strict: true | All strict type checking options enabled |
| removeComments: true | Remove comments from compiled JS |     

`package.json`

| Jest                  |                                          |
| --------------------- |------------------------------------------|
| transform    | A map from RegEx to paths to source file module transformation  |
| target: "es6"         | ECMAScript target version                |
| outDir: "build"       | Compiled JS files location               |
| strict: true          | All strict type checking options enabled |
| removeComments: true  | Remove comments from compiled JS         |
