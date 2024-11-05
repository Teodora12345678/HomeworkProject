import { Page, Locator } from '@playwright/test';

export class TabsPage {
    page: Page; 
    tab1: Locator; 
    tab2: Locator; 
    tab3: Locator; 
    tabContent: Locator;

    constructor(page: Page) {
        this.page = page;
        this.tab1 = page.locator('#tab1'); 
        this.tab2 = page.locator('#tab2'); 
        this.tab3 = page.locator('#tab3'); 
        this.tabContent = page.locator('.tab-content'); 
    }

    async goto() {
        await this.page.goto('https://demoqa.com/tabs');
    }

    async clickTab(tab: Locator) {
        await tab.click();
    }

    // Get the text content of the tab content area
    async getTabContentText(): Promise<string> {
        return await this.tabContent.textContent() || ''; // Return the displayed tab content
    }
}
