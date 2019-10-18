# to-do-application

add package.json file to your project and insert : 
```bash
{
    "name": "to-do-application",
    "version": "1.0.0",
    "description": "demo project.",
    "scripts": {
      "lite": "lite-server --port 10001",
      "start": "npm run lite"
    },
    "author": "",
    "license": "ISC",
    "devDependencies": {
      "lite-server": "^1.3.1"
    }
  }

```

To install dependencies, compile and run the Todo app:

```bash
$ npm install
$ npm start
```
You can now visit http://localhost:10001

```bash
$ npm install -D @percy/script
```
This will add @percy/script to your package.json file.

Next, create a file named snapshots.js and add your first PercyScript:
```
// snapshots.js
const PercyScript = require('@percy/script');

// A script to navigate our app and take snapshots with Percy.
PercyScript.run(async (page, percySnapshot) => {
  await page.goto('http://localhost:10001');
  await percySnapshot('TodoMVC home page');

  // Enter a new to-do.
  await page.type('.new-todo', 'A really important todo');
  await page.keyboard.press('Enter');
  await percySnapshot('TodoMVC with a new todo', { widths: [768, 992, 1200] });
});
```

To run your PercyScript locally, copy the PERCY_TOKEN environment variable from the new project screen or your project settings, then run:

```bash
$ export PERCY_TOKEN=aaabbbcccdddeee
$ npx percy exec -- node snapshots.js
```
