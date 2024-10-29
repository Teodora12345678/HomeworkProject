import { test, expect } from '@playwright/test';
import { RadioButtonsPage } from '../Pages/day3Demoqa/radioButtonPage';

test('Radio Buttons click', async ({ page }) => {
    const radioButtonsPage = new RadioButtonsPage(page);

    await radioButtonsPage.goto(); 

    const message = await page.locator('.mt-3').textContent();
    
    await radioButtonsPage.yesClickMethod();
    expect(message).toContain('You have selected Yes');

    await radioButtonsPage.impressiveClickMethod();
    expect(message).toContain('You have selected Impressive');

});