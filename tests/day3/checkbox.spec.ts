import { test, expect } from '@playwright/test';
import { BoxPage } from '../Pages/day3Demoqa/checkboxPage';

test('verify checkbox', async ({ page }) => {
    const checkBoxPage = new BoxPage(page);

    await checkBoxPage.goto(); 

    await checkBoxPage.clickDropdown(); 

    await checkBoxPage.clickDesktopButton(); 

    await checkBoxPage.checkButton(); 
    
    const isChecked = await checkBoxPage.isCheckboxChecked();
    expect(isChecked).toBeTruthy(); 
});
