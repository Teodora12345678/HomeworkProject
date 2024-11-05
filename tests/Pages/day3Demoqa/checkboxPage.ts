import { Page, Locator } from '@playwright/test';

export class BoxPage {
    readonly page: Page;
    readonly dropDownBtn: Locator;
    readonly desktopBtn: Locator;
    readonly checkBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.dropDownBtn = page.locator('#tree-node-home'); // alternative locator 
        this.desktopBtn = page.locator('li:has-text("Desktop") .rct-checkbox');
        this.checkBtn = page.locator('.rct-icon.rct-icon-check');
    }

    async goto() {
        await this.page.goto('https://demoqa.com/checkbox');
    }

    async clickDropdown() {
        await this.dropDownBtn.waitFor({ state: 'visible' }); 
        await this.dropDownBtn.click({ timeout: 10000 }); 
    }
    
    async clickDesktopButton() {
        await this.desktopBtn.click();
    }

    async checkButton() {
        await this.checkBtn.click();
    }

    async isCheckboxChecked() {
        return await this.checkBtn.isVisible(); // 
    }
}

