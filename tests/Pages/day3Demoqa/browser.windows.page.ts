import { Page, Locator, expect } from '@playwright/test';

export class BrowserPage {
    readonly page: Page;
    readonly newTabBtn: Locator;
    readonly newWindow: Locator;
    readonly newWindowMessage: Locator;
    readonly newTabmessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.newTabBtn = page.locator('#tabButton');
        this.newWindow = page.locator('#windowButton');
        this.newWindowMessage = page.locator('#sampleHeading'); 
        this.newTabmessage = page.locator('#sampleHeading');
    }

    async goto() {
        await this.page.goto('https://demoqa.com/browser-windows');
    }

    async clickNewTabBtnMethod() {
        // Click the button to open a new tab and wait for the new tab to open
        const [newTab] = await Promise.all([
            this.page.context().waitForEvent('page'), // Wait for a new tab to open
            this.newTabBtn.click() // Click to open the new tab
        ]);

        await newTab.waitForLoadState(); // Ensure the new tab is fully loaded

        // Get the message text in the new tab
        const message = await newTab.locator('#sampleHeading').textContent();
        
        // Assert the message content
        expect(message).toContain('This is a sample page');
        
        await newTab.close(); // Optionally, close the new tab after assertion
    }

    async newWindowMethod() {
        // Click to open a new window and wait for the new page event
        const [newWindow] = await Promise.all([
            this.page.context().waitForEvent('page'), // Wait for the new window to open
            this.newWindow.click() // Click to open the new window
        ]);

        await newWindow.waitForLoadState(); 

        // Get the message text in the new window
        const message = await newWindow.locator('#sampleHeading').textContent();
        
        // Assert that the message contains the expected text
        expect(message).toContain('This is a sample page');

        await newWindow.close(); 
    }
}
