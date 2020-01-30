## To Do Application For PercyScript

### Step 1: Integrate Percy

If you haven’t already, sign up for a free Percy account, name your organization, and create your first project.
```bash
$ git clone https://github.com/serhatgunes/ToDoApplication.git
$ cd ToDoApplication/
```

To install dependencies, compile and run the Todo app:

Note : If you don't have Node.js on your computer you can get from this link
https://nodejs.org/en/download/

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
```javascript
// snapshots.js
const PercyScript = require('@percy/script');

function sleep(ms = 0) {
  return new Promise(r => setTimeout(r, ms));
}

// A script to navigate our app and take snapshots with Percy.
PercyScript.run(async (page, percySnapshot) => {
  await page.goto('http://localhost:10001');
  await percySnapshot('TodoMVC home page');
  await sleep(3000);

  // Enter a new to-do.
  await page.type('.new-todo', 'A really important todo');
  await page.keyboard.press('Enter');
  await sleep(3000);

  await percySnapshot('New todo entered', { widths: [768, 992, 1200] });
}, {headless: false});
```

### Step 2: Run Visual Tests

To run your PercyScript locally, copy the PERCY_TOKEN environment variable from the new project screen or your project settings, then run:

```bash
$ export PERCY_TOKEN=aaabbbcccdddeee
$ npx percy exec -- node snapshots.js
```

### Step 3: Review Visual Changes

Change anything to your UI

Now run the snapshots again:

```bash
$ npx percy exec -- node snapshots.js
```

**You’ve done your first visual review!**
