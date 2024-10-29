import { Page, Locator, expect } from '@playwright/test';
import * as locators from '../../fixtures/locators/textbox.json'

export class TextBoxPage {
    readonly page: Page;
    readonly fullNameInput: Locator;
    readonly emailInput: Locator;
    readonly currentAddressInput: Locator;
    readonly permanentAddressInput: Locator;
    readonly submitButton: Locator;
    readonly output: Locator;

    constructor(page: Page) {
        this.page = page;
        this.fullNameInput = page.locator(locators.fullNameInput); // Selector for Full Name input
        this.emailInput = page.locator(locators.emailInput); // Selector for Email input
        this.currentAddressInput = page.locator(locators.currentAddressInput); // Selector for Current Address input
        this.permanentAddressInput = page.locator(locators.permanentAddressInput); // Selector for Permanent Address input
        this.submitButton = page.locator(locators.submitButton); // Selector for Submit button
        this.output = page.locator(locators.output); // Selector for output element
    }

    async goto() {
        await this.page.goto('https://demoqa.com/text-box'); // Navigate to the Text Box page
    }

    async fillFullName(fullNameString: string) {
        await this.fullNameInput.fill(fullNameString); // Fill in the Full Name
    }

    async fillEmail(email: string) {
        await this.emailInput.fill(email); // Fill in the Email
    }

    async fillCurrentAddress(currentAddress: string) {
        await this.currentAddressInput.fill(currentAddress); // Fill in the Current Address
    }

    async fillPermanentAddress(permanentAddress: string) {
        await this.permanentAddressInput.fill(permanentAddress); // Fill in the Permanent Address
    }

    async submit() {
        await this.submitButton.click(); // Click on the Submit button
    }
   
    async getOutputText() {
    return await this.output.textContent(); // Return the text inside the output element
}
     
    }

