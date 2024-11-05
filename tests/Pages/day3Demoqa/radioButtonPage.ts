import { Page, Locator, expect } from '@playwright/test';

export class RadioButtonsPage {
    readonly page: Page;
    readonly yesBtn: Locator;
    readonly impressiveBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.yesBtn = page.locator("#yesRadio");
        //this.yesBtn = page.locator('label:has-text("Yes") + input[type="radio"]');
        this.impressiveBtn = page.locator("#impressiveRadio");
    }

    async goto() {
        await this.page.goto('https://demoqa.com/radio-button'); 
    }

    async yesClickMethod() {
        await this.yesBtn.click();
    }

    async impressiveClickMethod() {
        await this.impressiveBtn.click();
    }
}