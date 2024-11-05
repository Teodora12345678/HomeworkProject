import { expect, type Locator, type Page } from '@playwright/test';

export class DynamicPage {
  readonly page: Page;
  readonly enableAfter: Locator;
  readonly colorChange: Locator;
  readonly visibleAfter: Locator;

  constructor(page: Page) {
    this.page = page;
    this.enableAfter = page.locator('#enableAfter');
    this.colorChange = page.locator('#colorChange');
    this.visibleAfter = page.locator('#visibleAfter');
  }

  async goto() {
    await this.page.goto('https://demoqa.com/dynamic-properties');
  }

  async checkEnableAfterMethod() {
    await expect(this.enableAfter).toBeEnabled();
  }

async checkColorChange() {
    const initialColor = await this.colorChange.evaluate(el => window.getComputedStyle(el).color);
    await this.page.waitForTimeout(1000); // Wait for color change to occur
    const newColor = await this.colorChange.evaluate(el => window.getComputedStyle(el).color);
    return initialColor !== newColor; // Check if color has changed
}

async checkVisibleAfter() {
    await this.visibleAfter.waitFor({ state: 'visible' });
 }

}
