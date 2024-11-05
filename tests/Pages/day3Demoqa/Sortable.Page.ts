import { Page, Locator } from '@playwright/test';

export class SortablePage {
    page: Page;
    sortableItems: Locator; 

    constructor(page: Page) {
        this.page = page;
        this.sortableItems = page.locator('.list-group-item'); 
    }

    async goto() {
        await this.page.goto('https://demoqa.com/sortable');
    }

    async getSortableItemsCount(): Promise<number> {
        return await this.sortableItems.count(); 
    }

    async getSortableItemText(index: number): Promise<string> {
        return await this.sortableItems.nth(index).textContent() || ''; 
    }

    async dragAndDropItem(fromIndex: number, toIndex: number) {
        const itemToDrag = this.sortableItems.nth(fromIndex);
        const targetItem = this.sortableItems.nth(toIndex);
        await itemToDrag.dragTo(targetItem); 
    }
}
