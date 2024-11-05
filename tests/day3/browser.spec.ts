import { test, expect } from '@playwright/test';
import { BrowserPage } from '../Pages/day3Demoqa/browser.windows.page';

test('newTab and newWindow tests', async ({ page }) => {
    const browserPage = new BrowserPage(page);

    await browserPage.goto();

    await browserPage.clickNewTabBtnMethod();

    await browserPage.newWindowMethod();
});
