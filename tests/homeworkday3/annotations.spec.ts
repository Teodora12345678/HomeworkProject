import { test, expect } from '@playwright/test'; // task 1 // Homework3
import * as fs from 'fs';

const loginData = JSON.parse(fs.readFileSync('./tests/fixtures/data/single-user.json', 'utf-8'));

test.describe('Login Tests', () => {
 // use fixme
  test.fixme('User should not be able to log in with invalid credentials', async ({ page }) => {
    await page.goto('/');
    const invalidUsername = 'invalidUser';
    const invalidPassword = 'invalidPass';
    
    await page.locator('[data-test="username"]').fill(invalidUsername);
    await page.locator('[data-test="password"]').fill(invalidPassword);
    await page.locator('[data-test="login-button"]').click();

    // Expect an error message to be visible on the page after clicking the login button
    await expect(page.locator('[data-test="error-message"]')).toBeVisible();
  });
  // use regression 
  test('User should not be able to log in with invalid credentials', async ({ page }) => {
    test.info().annotations.push({ type: 'tag', description: '@regression' });
    await page.goto('/');
    const invalidUsername = 'invalidUser';
    const invalidPassword = 'invalidPass';
    
    await page.locator('[data-test="username"]').fill(invalidUsername);
    await page.locator('[data-test="password"]').fill(invalidPassword);
    await page.locator('[data-test="login-button"]').click();

    // Expect an error message to be visible on the page after clicking the login button
    await expect(page.locator('[data-test="error-message"]')).toBeVisible();
  });
  // ONLY THIS TEST SHOULD BE EXECUTED
  test.only('User should not be able to log in with empty credentials', async ({ page }) => {
    await page.goto('/');
    
    // Leave both username and password fields empty
    await page.locator('[data-test="username"]').fill('');
    await page.locator('[data-test="password"]').fill('');
    await page.locator('[data-test="login-button"]').click();

    // Expect an error message to be visible indicating that fields are required
    await expect(page.locator('[data-test="error-message"]')).toBeVisible();
    await expect(page.locator('[data-test="error-message"]')).toHaveText('Epic sadface: Username is required'); 
  });

});

