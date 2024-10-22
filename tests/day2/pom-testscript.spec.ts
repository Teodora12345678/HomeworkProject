import { test, expect } from '@playwright/test'; //task 6 // Log-in
import * as fs from 'fs';
import { LoginPage } from './tests/Pages/LoginPage';  // Import the LoginPage class
import { ProductsPage } from './tests/Pages/ProductPage';  // Import the Product class


// Load login data from the JSON file
const logins = JSON.parse(fs.readFileSync('./tests/fixtures/data/single-user.json', 'utf-8'));

test.describe('Shopping flow suit', () => {

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

test.describe('Verify Products Page elment', () => {

  test('should verify that the image link with ss locator is visible', async ({ page }) => {
    // Instantiate the ProductsPage class
    const roductsPage = new ProductsPage(page);

    // Go to the products page
    await ProductsPage.goto();

    // Verify that the ss (image link) is visible
    await expect(ProductsPage.ss).toBeVisible();
  });

  test('should click on the ss image link and verify navigation', async ({ page }) => {
    // Instantiate the ProductsPage class
     const productsPage = new ProductsPage(page);

    // Go to the products page
    await productsPage.goto();

    // Click on the ss (image link)
    await productsPage.ss.click();

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory-item.html?id=4'); // Adjust based on actual URL pattern
  });

});

});
