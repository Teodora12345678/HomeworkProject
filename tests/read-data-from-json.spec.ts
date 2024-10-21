import { test, expect } from '@playwright/test';

import * as fs from 'fs';
const data1 = JSON.parse(fs.readFileSync('../VScodeex/tests/day2/single-user.json', 'utf-8'));

test('test', async ({ page }) => {
    await page.goto('/');
    //await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill(data1.username);
   // await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill(data1.password);
    await page.locator('[data-test="login-button"]').click();
   // Wait for the locator to be visible before clicking
//await page.locator('[data-test="title"]').waitFor({ state: 'visible', timeout:60000 });
//await page.waitForSelector('[data-test="title"]', { state: 'visible' });

//await page.locator('[data-test="title"]').click();

// Then, expect the text to be present
//await expect(page.locator('[data-test="title"]')).toContainText("Products");
await expect(page.locator('[data-test="title"]')).toContainText(data1.title);

  });
//import * as fs from 'fs';npm config get prefix

// try {
//   const data = JSON.parse(fs.readFileSync("../fixtures/data/singleuser.json", "utf-8"));
//   console.log(data); // Use the data as needed
// } catch (error) {
//   console.error("Error reading or parsing the JSON file:", error);
// }
