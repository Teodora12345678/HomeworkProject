import { test, expect } from '@playwright/test';
import { ButtonsPage } from '../Pages/day3Demoqa/buttonsPage';

test('Buttons click', async ({ page }) => {
    const buttonsPage = new ButtonsPage(page);

    await buttonsPage.goto(); 

    await buttonsPage.doubleClickMethod();
    const doubleClickMessage = await page.locator('#doubleClickMessage').textContent();
    expect(doubleClickMessage).toContain('You have done a double click');

    await buttonsPage.rightClickMethod();
    const rightClickMessage = await page.locator('#rightClickMessage').textContent();
    expect(rightClickMessage).toContain('You have done a right click');

    await buttonsPage.clickMethod();
    const clickMessage = await page.locator('#dynamicClickMessage').textContent();
    expect(clickMessage).toContain('You have done a dynamic click');
});