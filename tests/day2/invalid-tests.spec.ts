import { test, expect } from '@playwright/test'; // task 4 / homework 2
import * as fs from 'fs';

const invalid = JSON.parse(fs.readFileSync('./tests/fixtures/data/invalid-data.json', 'utf-8'));
const loginLocator = JSON.parse(fs.readFileSync('./tests/fixtures/locators/login.json', 'utf-8'));
const validusers = JSON.parse(fs.readFileSync('./tests/fixtures/data/validusers.json', 'utf-8'));

invalid.forEach(zapis => {   
  test(`Invalid login test for ${zapis.username}`, async ({ page }) => {
    await page.goto('/');
    await page.locator(loginLocator.username).fill(zapis.username);
    await page.locator(loginLocator.password).fill(zapis.password);
    await page.locator(loginLocator.button).click();

    // Expect an error message for invalid login
    await expect(page.locator('[data-test="error"]')).toBeVisible();
  });
});

// Test for valid users
validusers.forEach(element => {
  test(`Valid login test for ${element.username}`, async ({ page }) => {
    await page.goto('/');
    await page.locator(loginLocator.username).fill(element.username);
    await page.locator(loginLocator.password).fill(element.password);
    await page.locator(loginLocator.button).click();
});
});
