# Just a demo test library

A working React component library for testing NPM and Yarn packaging. Includes my own ESLint and Prettier config files.

Tested to work with React hooks without the dreaded [multiple instances of React problem](https://github.com/facebook/react/issues/13991). Works with `npm link` and `yarn link` for local development.

But usually, you just want to use this as a template to start your own component library. This is what it was designed for, to get a working baseline.

- Git clone this repo in your own dir name. Let's say we want `custom-lib`. Run `git clone URL custom-lib`
- Edit `pacakge.json` and use your own details
- Install dependencies with `yarn install`
- Edit your library in `src/`
- Bundle your JS files with `yarn start`. This will generate `dist/index.js`

For local development

- Run `yarn link` in the local working directory `custom-lib`
- Go to your app project directory and run `yarn link custom-lib`

Add this to your existing app:

```js
import React from 'react';
import ButtonCounter from 'react-button-counter';

export default () => {
    return (
        <div>
            <p>Click button below to incremement counter</p>
            <ButtonCounter />
        </div>
    );
};
```

Codesandbox coming soon.
