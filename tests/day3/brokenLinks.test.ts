import { test, expect } from '@playwright/test';
import { BrokenLinkPage } from '../Pages/day3Demoqa/BrokenlinkPage';

test('Check Broken Link', async ({ page }) => {
    const brokenLinksPage = new BrokenLinkPage (page);
    
    await brokenLinksPage.goto();
    
    await brokenLinksPage.validLinkMethod();
    await expect(page).toHaveURL('https://demoqa.com/')

    await brokenLinksPage.brokenLinkMethod();
    await expect(page).toHaveURL('http://the-internet.herokuapp.com/status_codes/500'); 
    
});