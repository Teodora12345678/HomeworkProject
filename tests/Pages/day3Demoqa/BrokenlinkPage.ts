
import { Page, Locator, expect } from '@playwright/test';

export class BrokenLinkPage {
    readonly page: Page;
    readonly link: Locator;
     readonly brokenLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.brokenLink = page.locator('a', { hasText: 'Click Here for Broken Link' })
    }

    async goto() {
        await this.page.goto('https://demoqa.com/broken');
    }

    async brokenLinkMethod() {
        await this.brokenLink.click();
    }
}
