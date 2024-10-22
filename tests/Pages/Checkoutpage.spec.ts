import { Page, Locator } from '@playwright/test';
import locators from './tests/fixtures/locators/login.json';  // Import the JSON file with selectors

export class CheckoutPage {
    readonly page: Page;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly postalCodeInput: Locator;
    readonly finishButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstNameInput = page.locator(locators.firstNameInput);
        this.lastNameInput = page.locator(locators.lastNameInput);
        this.postalCodeInput = page.locator(locators.postalCodeInput);
        this.finishButton = page.locator(locators.finishButton);
    }
        
    async goto() {
        await this.page.goto('https://www.saucedemo.com/checkout-step-one.html');
    }
     
    async fillCheckoutDetails(firstName: string, lastName: string, postalCode: string) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);
    }

    async completeCheckout() {
        await this.finishButton.click();
    }
}

