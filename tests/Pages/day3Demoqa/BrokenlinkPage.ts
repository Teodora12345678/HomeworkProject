
import { Page, Locator, expect } from '@playwright/test';

export class BrokenLinkPage {
    readonly page: Page;
    readonly validlink: Locator;
     readonly brokenLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.validlink=page.locator('a', { hasText: 'Click Here for Valid Link' })
        this.brokenLink = page.locator('a', { hasText: 'Click Here for Broken Link' })
    }

    async goto() {
        await this.page.goto('https://demoqa.com/broken');
    }
    
    async validLinkMethod() {
        await this.validlink.click();
    }

    async brokenLinkMethod() {
        await this.brokenLink.click();
    }
}
