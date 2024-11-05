import { Page, Locator } from '@playwright/test';

export class SelectablePage {
    page: Page;
    selectableItems: Locator; // Locator for selectable items

    constructor(page: Page) {
        this.page = page;
        this.selectableItems = page.locator('.list-group-item'); 
    }

    async goto() {
        await this.page.goto('https://demoqa.com/selectable');
    }

    async getSelectableItemsCount(): Promise<number> {
        return await this.selectableItems.count(); 
    }

    async clickSelectableItem(index: number) {
        await this.selectableItems.nth(index).click();
    }

    async getSelectableItemClass(index: number): Promise<string> {
        return await this.selectableItems.nth(index).getAttribute('class') || ''; 
    }
}
