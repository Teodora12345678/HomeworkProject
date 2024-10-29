import { Page, Locator, expect } from '@playwright/test';

export class UploadsPage {
    readonly page: Page;
    readonly downloadBtn: Locator;
    readonly uplaodFileBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.downloadBtn = page.locator("#downloadButton");
        this.uplaodFileBtn = page.locator("#uploadFile");
    }

    async goto() {
        await this.page.goto('https://demoqa.com/upload-download'); 
    }

    async downloadMethod() {
        await this.downloadBtn.click();
    }
    async uploadFilemethod(filePath: string) {
        await this.uplaodFileBtn.setInputFiles(filePath);
    }
}

