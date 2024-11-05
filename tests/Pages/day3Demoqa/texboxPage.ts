import { Page, Locator } from '@playwright/test';
import * as locators from '../../fixtures/locators/textbox.json';

export class TextBoxPage {
    static getOutputText() {
      throw new Error('Method not implemented.');
    }
    readonly page: Page;
    readonly fullNameInput: Locator;
    readonly emailInput: Locator;
    readonly currentAddressInput: Locator;
    readonly permanentAddressInput: Locator;
    readonly submitButton: Locator;
    readonly output: Locator;

    constructor(page: Page) {
        this.page = page;
        this.fullNameInput = page.locator(locators.fullNameInput);
        this.emailInput = page.locator(locators.emailInput);
        this.currentAddressInput = page.locator(locators.currentAddressInput);
        this.permanentAddressInput = page.locator(locators.permanentAddressInput);
        this.submitButton = page.locator(locators.submitButton);
        this.output = page.locator(locators.output);
    }  

    async goto() {
        await this.page.goto('https://demoqa.com/text-box');
    }

    async fillFullName(fullNameString: string) {
        await this.fullNameInput.fill(fullNameString);
    }

    async fillEmail(email: string) {
        await this.emailInput.fill(email);
    }

    async fillCurrentAddress(currentAddress: string) {
        await this.currentAddressInput.fill(currentAddress);
    }

    async fillPermanentAddress(permanentAddress: string) {
        await this.permanentAddressInput.fill(permanentAddress);
    }

    async submit() {
        await this.submitButton.click();
    }

    async getOutputText() {
        return await this.output.textContent();
    } 
}  
