import { test, expect } from '@playwright/test'; //task 4 - INVALID DATA FROM JSON
import * as fs from 'fs';


const invalid = JSON.parse(fs.readFileSync('./tests/fixtures/data/invalid-data.json', 'utf-8'));
const loginLocator = JSON.parse(fs.readFileSync('./tests/fixtures/locators/login.json'), 'utf-8');

const valid = JSON.parse(fs.readFileSync('./tests/fixtures/data/valid-data.json', 'utf-8'));

invalid.forEach(zapis => {
    
    test.describe ("Test suite for update user", () => {
        test(`test ${zapis.username}`, async ({ page }) => {
            await page.goto('/');
            await page.locator(loginLocator.username).fill(zapis.username);
            await page.locator('[data-test="password"]').fill(zapis.password);
            await page.locator('[data-test="login-button"]').click();

            await expect(page.locator('[data-test="error"]')).toBeVisible()
        });
        test(`test ${zapis.username}`, async ({ page }) => {
            await page.goto('/');
            await page.locator('[data-test="username"]').fill(zapis.username);
            await page.locator('[data-test="password"]').fill(zapis.password);
            await page.locator('[data-test="login-button"]').click();

            await expect(page.locator('[data-test="error"]')).toBeVisible()
        });
        
        test.describe ("Test suite for update user", () => {
            test(`test ${zapis.username}`, async ({ page }) => {
                await page.goto('/');
                await page.locator('[data-test="username"]').fill(zapis.username);
                await page.locator('[data-test="password"]').fill(zapis.password);
                await page.locator('[data-test="login-button"]').click();

                await expect(page.locator('[data-test="error"]')).toBeVisible()
            });
        });
    });
});

valid.forEach(element => {
    
});