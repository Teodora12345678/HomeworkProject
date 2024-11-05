import { test, expect } from '@playwright/test';
import { DynamicPage } from '../Pages/DynamicPage';

test.describe('Dynamic Properties Tests', () => {
    let dynamicPage: DynamicPage;

    test.beforeEach(async ({ page }) => {
        dynamicPage = new DynamicPage(page);
        await dynamicPage.goto();
    });

    test('Test enable after button', async () => {
        await dynamicPage.checkEnableAfterMethod(); 
    });

    test('Test color change', async () => {
        const colorChanged = await dynamicPage.checkColorChange();
        expect(colorChanged).toBe(true);
    });

    test('Test visibility after', async () => {
        await dynamicPage.checkVisibleAfter(); 
        expect(await dynamicPage.visibleAfter.isVisible()).toBe(true);
    });
});

