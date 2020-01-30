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