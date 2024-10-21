import { Page, Locator } from '@playwright/test';

export class ProductsPage {
    readonly page: Page;
    readonly productTitle: Locator;
    readonly ss: Locator;                       // objekt ovde e productTitle i tn. pocnuva so mala bukva

    constructor(page: Page) {
        this.page = page;
        this.productTitle = page.locator('.title');
        this.ss = page.locator('.item_4_img_link');
    }
    async goto() {
     await this.page.goto('https://www.saucedemo.com/inventory.html');
    }

    async getProductTitle() {
     return await this.productTitle.textContent();
    }
}

