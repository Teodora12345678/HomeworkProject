import { Page, Locator } from '@playwright/test';

export class ProductsPage {
    readonly page: Page;
    readonly productTitle: Locator;         // objekt ovde e productTitle i tn. pocnuva so mala bukva
    readonly ss: Locator;  
    readonly addToCartButtons: Locator;
    readonly cartIcon:Locator

    constructor(page: Page) {
        this.page = page;
        this.productTitle = page.locator('.title');
        this.ss = page.locator('.item_4_img_link');
        this.addToCartButtons = page.locator('.btn_primary'); 
        this.cartIcon = page.locator('.shopping_cart_link');
    }
    async addProductToCart(index: number) {
        await this.addToCartButtons.nth(index).click();
    }

    async goToCart() {
        await this.cartIcon.click();
    }
    async goto() {
     await this.page.goto('https://www.saucedemo.com/inventory.html');
    }

    async getProductTitle() {
     return await this.productTitle.textContent();
    }
}

