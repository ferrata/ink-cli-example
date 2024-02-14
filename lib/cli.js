#!/usr/bin/env node
import { jsx as _jsx } from "react/jsx-runtime";
import { render } from 'ink';
import meow from 'meow';
import App from './app.js';
const cli = meow(`
  Usage
    $ ink-cli-example

  Options
    --name  Your name

  Examples
    $ ink-cli-example --name=Jane
    Hello, Jane
`, {
    importMeta: import.meta,
    flags: {
        name: {
            type: 'string',
        },
    },
});
render(_jsx(App, { name: cli.flags.name }));
//# sourceMappingURL=cli.js.map