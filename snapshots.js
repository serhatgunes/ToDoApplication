// snapshots.js
const PercyScript = require('@percy/script');

// A script to navigate our app and take snapshots with Percy.
PercyScript.run(async (page, percySnapshot) => {
  await page.goto('http://localhost:10001');
  await percySnapshot('TodoMVC home page');

  // Enter a new to-do.
  await page.type('.new-todo', 'A really important todoo');
  await page.keyboard.press('Enter');
  await percySnapshot('TodoMVC with a new todo', { widths: [768, 992, 1200] });
});