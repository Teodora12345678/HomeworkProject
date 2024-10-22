import { test, expect } from '@playwright/test';
import { ProductsPage } from './ProductsPage'; //import ProducstPage class
import { CartPage } from './test/Pages/CartPage'; //import CartPage class
import { CheckoutPage } from './test/Pages/CheckoutPage'; // import CheckoutPage class
import { LoginPage } from './tests/Pages/LoginPage';  // Import LoginPage class

test.describe('Sauce Demo Shopping Flow', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the Sauce Demo site before each test
    await page.goto('https://www.saucedemo.com/');
  });

  test('should login, add product to cart, and go to cart', async ({ page }) => {
    // Instantiate page objects
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    // Step 1: Login to sauce demo
    await LoginPage.login('standard_user', 'secret_sauce');

    // Verify that we are on the Products page after login
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    
    // Step 2: Add first product to the cart
    await productsPage.addProductToCart(0); // Add the first product

    // Step 3: Go to the cart
    await productsPage.goToCart();

    // Verify that the cart contains one item
    const cartItemCount = await page.locator('.cart_item').count();
    expect(cartItemCount).toBe(1);
  });

  test('should add multiple products to cart and proceed to checkout', async ({ page }) => {
    // Instantiate page objects
    const homePage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    // Step 1: Login
    await homePage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory.html/);

    // Step 2: Add multiple products to the cart
    await productsPage.addProductToCart(0); // Add the first product
    await productsPage.addProductToCart(1); // Add the second product

    // Step 3: Go to the cart
    await productsPage.goToCart();

    // Verify that the cart contains two items
    const cartItemCount = await page.locator('.cart_item').count();
    expect(cartItemCount).toBe(2);

    // Step 4: Proceed to checkout
    await cartPage.proceedToCheckout();

    // Step 5: Fill out checkout information
    await checkoutPage.fillCheckoutDetails('Tea', 'P', '12345');

    // Step 6: Complete the checkout process
    await checkoutPage.completeCheckout();

    // Verify that the checkout is complete
    await expect(page).toHaveURL("https://www.saucedemo.com/checkout-complete.html");
    await expect(page.locator('.complete-header')).toHaveText('THANK YOU FOR YOUR ORDER');
  });
});
