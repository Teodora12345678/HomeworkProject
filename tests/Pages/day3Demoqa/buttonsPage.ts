import { Page, Locator, expect } from '@playwright/test';

export class ButtonsPage {
    readonly page: Page;
    readonly doubleClickBtn: Locator;
    readonly rightClickBtn: Locator;
    readonly clickBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.doubleClickBtn = page.locator("#doubleClickBtn");
        this.rightClickBtn = page.locator("#rightClickBtn");
        this.clickBtn = page.locator("#n3oqW");
    }

    async goto() {
        await this.page.goto('https://demoqa.com/buttons'); 
    }

    async doubleClickMethod() {
        await this.doubleClickBtn.dblclick();
    }

    async rightClickMethod() {
        await this.rightClickBtn.click({ button: 'right' });
    }

    async clickMethod() {
        await this.clickBtn.click();
    }
}

