import { Page, Locator } from '@playwright/test';

export class ToolTipsPage {
    page: Page;
    tooltipButton: Locator;
    tooltipText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.tooltipButton = page.locator('#toolTipButton'); 
        this.tooltipText = page.locator('.tooltip-inner'); 
    }

    async goto() {
        await this.page.goto('https://demoqa.com/tool-tips');
    }

    async hoverOverTooltipButton() {
        await this.tooltipButton.hover(); 
    }

    async getTooltipText(): Promise<string> {
        await this.tooltipText.waitFor({ state: 'visible' }); 
        return await this.tooltipText.textContent() || ''; 
    }
}
