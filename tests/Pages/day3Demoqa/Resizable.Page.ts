import { Page, Locator } from '@playwright/test';

export class ResizablePage {
    page: Page;
    resizeHandle: Locator;

    constructor(page: Page) {
        this.page = page;
        this.resizeHandle = page.locator('.react-resizable-handle'); 
    }

    async goto() {
        await this.page.goto('https://demoqa.com/resizable');
    }

    async getElementSize(): Promise<{ width: number; height: number }> {
        return await this.page.evaluate(() => {
            const element = document.querySelector('.react-resizable'); 
            if (!element) throw new Error('Resizable element not found');
            const { width, height } = window.getComputedStyle(element);
            return {
                width: parseFloat(width),
                height: parseFloat(height),
            };
        });
    }

    async resizeElement(deltaX: number, deltaY: number) {
        // Calculate the starting position of the resize handle
        const handleBox = await this.resizeHandle.boundingBox();
        if (!handleBox) throw new Error('Resize handle not found');


        await this.page.mouse.move(handleBox.x + handleBox.width / 2, handleBox.y + handleBox.height / 2);
        await this.page.mouse.down();
        await this.page.mouse.move(handleBox.x + handleBox.width / 2 + deltaX, handleBox.y + handleBox.height / 2 + deltaY);
        await this.page.mouse.up();
    }
}
