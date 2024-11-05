import { Page, Locator } from '@playwright/test';

export class CartPage {
    readonly page: Page;
    readonly checkoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.checkoutButton = page.locator('.checkout_button'); // 
    }
    
    async goto() {
        await this.page.goto('https://www.saucedemo.com/cart.html');
    }
    async proceedToCheckout() {
        await this.checkoutButton.click();
    }
}
