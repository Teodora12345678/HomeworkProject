import { Page, Locator, expect } from '@playwright/test';

export class AccordionPage {
    readonly page: Page;
    readonly section1Header: Locator;
    readonly section1Content: Locator;
    readonly section2Header: Locator;
    readonly section2Content: Locator;
    readonly section3Header: Locator;
    readonly section3Content: Locator;

    constructor(page: Page) {
        this.page = page;
        this.section1Header = page.locator('#section1Heading');
        this.section1Content = page.locator('#section1Content');
        this.section2Header = page.locator('#section2Heading');
        this.section2Content = page.locator('#section2Content');
        this.section3Header = page.locator('#section3Heading');
        this.section3Content = page.locator('#section3Content');
    }

    async goto() {
        await this.page.goto('https://demoqa.com/accordian');
    }

    /**
     * Expands a given section by clicking on the header.
     * @param sectionHeader - Locator of the section header to expand
     */
    async expandSection(sectionHeader: Locator) {
        await sectionHeader.click();
    }

    /**
     * Verifies if the content of a section is visible.
     * @param sectionContent - Locator of the section content to verify visibility
     */
    async verifySectionContentIsVisible(sectionContent: Locator) {
        await expect(sectionContent).toBeVisible();
    }

    /**
     * Verifies the text content of a section.
     * @param sectionContent - Locator of the section content
     * @param expectedText - Expected text to be contained in the section content
     */
    async verifySectionContentText(sectionContent: Locator, expectedText: string) {
        const contentText = await sectionContent.textContent();
        expect(contentText).toContain(expectedText);
    }
}
