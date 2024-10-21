import { test, expect } from '@playwright/test'; //task 6
import * as fs from 'fs';
import { LoginPage } from './tests/Pages/LoginPage';  // Import the LoginPage class

// Load login data from the JSON file
const logins = JSON.parse(fs.readFileSync('./tests/fixtures/data/single-user.json', 'utf-8'));

test.describe('Saucedemo Login Tests', () => {
  // Loop through each user in the login data
  logins.forEach(login => {
    test(`Test login for user: ${login.username}`, async ({ page }) => {
      // Create an instance of the LoginPage
      const loginPage = new LoginPage(page);
      
      // **Using loginPage instance below**
      // Go to the login page
      await loginPage.goto();
      
      // negative cases
      await loginPage.login(login.username, "gresen password");
      // Verify that the title matches what's in the JSON file (e.g., "Products")
      await expect(page.locator('.title')).toHaveText("error");  
      
      // Perform login using the username and password from JSON data
      await loginPage.login(login.username, login.password);


      
      // Verify that the title matches what's in the JSON file (e.g., "Products")
      await expect(page.locator('.title')).toHaveText(login.title);  
    });
  });
});
