import { Page, Locator, expect } from '@playwright/test';

export class ModalDialogsPage {
    private page: Page;

    private smallModalButton: Locator;
    private largeModalButton: Locator;
    private closeSmallModalButton: Locator;
    private closeLargeModalButton: Locator;
    private smallModalContent: Locator;
    private largeModalContent: Locator;

    constructor(page: Page) {
        this.page = page;
        this.smallModalButton = page.locator('#showSmallModal');
        this.largeModalButton = page.locator('#showLargeModal');
        this.closeSmallModalButton = page.locator('#closeSmallModal');
        this.closeLargeModalButton = page.locator('#closeLargeModal');
        this.smallModalContent = page.locator('.modal-content').filter({ hasText: 'Small Modal' });
        this.largeModalContent = page.locator('.modal-content').filter({ hasText: 'Large Modal' });
    }

    async openSmallModal() {
        await this.smallModalButton.click();
    }

    async closeSmallModal() {
        await this.closeSmallModalButton.click();
    }

    async openLargeModal() {
        await this.largeModalButton.click();
    }

    async closeLargeModal() {
        await this.closeLargeModalButton.click();
    }

    async verifySmallModalIsVisible() {
        await expect(this.smallModalContent).toBeVisible();
    }
    
    async verifySmallModalIsHidden() {
        await expect(this.smallModalContent).toBeHidden();
    }

    async verifyLargeModalIsVisible() {
        await expect(this.largeModalContent).toBeVisible();
    }
   
    async verifyLargeModalIsHidden() {
        await expect(this.largeModalContent).toBeHidden();
    }

    /**
     * Returns the text content of the small modal.
     * @returns {Promise<string>}
     */
    async getSmallModalText(): Promise<string> {
        return await this.smallModalContent.textContent() || '';
    }

    /**
     * Returns the text content of the large modal.
     * @returns {Promise<string>}
     */
    async getLargeModalText(): Promise<string> {
        return await this.largeModalContent.textContent() || '';
    }
}
