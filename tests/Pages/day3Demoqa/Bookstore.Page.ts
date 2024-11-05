import { Page, Locator } from '@playwright/test';

export class BookStorePage {
    readonly page: Page;
    readonly searchInput: Locator;
    readonly bookTitles: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchInput = page.locator('#searchBox'); 
        this.bookTitles = page.locator('.rt-tbody .rt-tr .mr-2'); 
    }

    async goto() {
        await this.page.goto('https://demoqa.com/books');
    }

    async searchBook(title: string) {
        await this.searchInput.fill(title); 
    }

    async getBookTitles(): Promise<string[]> {
        return await this.bookTitles.allTextContents(); 
    }
}
