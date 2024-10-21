import { test, expect } from '@playwright/test'; //task 4
import * as fs from 'fs';

const login = JSON.parse(fs.readFileSync('./tests/fixtures/data/single-user.json', 'utf-8'));

login.forEach(zapis => {
  test(`test ${login.username}`, async ({ page }) => {
    await page.goto('/');
    await page.locator('[data-test="username"]').fill(zapis.username);
    await page.locator('[data-test="password"]').fill(zapis.password);
    await page.locator('[data-test="login-button"]').click();

    await expect(page.locator('[data-test="title"]')).toContainText("Products");  
  });
});