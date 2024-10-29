import { test, expect } from '@playwright/test';
import {demoqaLoginPage} from '../Pages/day3Demoqa/demoqaLoginPage.ts'  // Import Loginpage
import * as fs from 'fs';
const demoLogin = JSON.parse(fs.readFileSync('./tests/fixtures/locators/logindemoqa.json', 'utf-8')); 
// dali mi treba ovaa linija kod?
const data1 = JSON.parse(fs.readFileSync('./tests/fixtures/data/valid-usersqa.json', 'utf-8')); 
const data2 = JSON.parse(fs.readFileSync('./tests/fixtures/data/invalid-usersqa.json', 'utf-8')); 

data1.validUsers.forEach((user) => {
    test(`ok ${user.username} `, async ({ page }) => {
        const loginPage = new demoqaLoginPage(page);
        // Go to the login pageS
        await loginPage.goto();

        // Perform login with valid credentials
        await loginPage.login(user.username, user.password);

        // Assert that the logout button is visible (ensure that this method exists in demoqaLoginPage class)
        const isLogoutVisible = await loginPage.logoutButtonIsVisible();
        expect(isLogoutVisible).toBe(true); // Valid user should see logout button
    });
});

data2.invalidUsers.forEach((user) => {
    test(`unigie des. ${user.username} `, async ({ page }) => {
        const loginPage = new demoqaLoginPage(page);

        // Go to the login page
        await loginPage.goto();

        // Perform login with invalid credentials
        await loginPage.login(user.username, user.password);

        // Assert that the error message is visible (ensure that this method exists in demoqaLoginPage class)
        const isErrorVisible = await loginPage.errorMessageIsVisible();
        expect(isErrorVisible).toBe(true); // Invalid user should see error message
    });
});