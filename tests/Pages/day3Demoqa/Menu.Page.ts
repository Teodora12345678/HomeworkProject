import { Page, Locator } from '@playwright/test';

export class MenuItem2Page {
    page: Page;
    menuItem2: Locator; 
    submenuItems: Locator; 

    constructor(page: Page) {
        this.page = page;
        this.menuItem2 = page.locator('#nav > li:nth-child(2) > a'); 
        this.submenuItems = page.locator('#nav > li:nth-child(2) > ul > li'); 
    }

    async goto() {
        await this.page.goto('https://demoqa.com/menu#');
    }


    async hoverOverMenuItem2() {
        await this.menuItem2.hover(); 
    }

   
    async clickSubmenuItem(index: number) {
        await this.submenuItems.nth(index).click(); 
    }

 
    async getSubmenuItemText(index: number): Promise<string> {
        return await this.submenuItems.nth(index).textContent() || ''; 
    }
}
