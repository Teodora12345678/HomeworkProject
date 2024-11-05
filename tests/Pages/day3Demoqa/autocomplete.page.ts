import { Page, Locator, expect } from '@playwright/test';

export class AutoCompletePage {
    page: Page; // The page object
    inputField: Locator; // Locator for the input field
    results: Locator; // Locator for the results

    constructor(page: Page) {
        this.page = page;
        this.inputField = page.locator('#autoComplete'); // Selector for the input field
        this.results = page.locator('.css-1d8n9h1'); // Selector for the results
    }

    // Navigate to the auto-complete page
    async goto() {
        await this.page.goto('https://demoqa.com/auto-complete');
    }

    // Type a value into the input field
    async typeValue(value) {
        await this.inputField.fill(value);
    }

    // Get the number of results shown
    async getResultsCount() {
        await this.results.waitFor({ state: 'visible' }); // Wait until results are visible
        return await this.results.count(); // Return the count of results
    }

    // Get the text of a specific result by index
    async getResultText(index) {
        return await this.results.nth(index).textContent() || ''; // Return text or empty string
    }
}
