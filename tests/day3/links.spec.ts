import { test, expect } from '@playwright/test';

import { LinksPage } from '../Pages/day3Demoqa/LinksPage';

test('Click Links', async ({ page }) => {
    const linksPage = new LinksPage(page);

    await linksPage.goto(); 

    await linksPage.homeLinkmethod();
    // console.log('Current URL:', await page.url());
    await expect(page).toHaveURL('https://demoqa.com/'); 

    await linksPage.homerMotsLinkmethod();
    await expect(page).toHaveURL('https://demoqa.com/'); 

    const message = await page.locator('#linkResponse').textContent(); //imaat isto ID

    await linksPage.createdLinkMethod();
    
    expect(message).toContain('Link has responded with staus 201 and status text Created');
    
    await linksPage.noContenLinkMethod();
    expect(message).toContain('Link has responded with staus 204 and status text No Content');
    
    await linksPage.movedLinkMethod();
    expect(message).toContain('Link has responded with staus 301 and status text Moved Permanently');

    await linksPage.badRequestMethod();
    expect(message).toContain('Link has responded with staus 400 and status text Bad Request');
    
    await linksPage.unauthorizedMethod();
    expect(message).toContain('Link has responded with staus 401 and status text Unauthorized');
    
    await linksPage.forbiddenMethod();
    expect(message).toContain('Link has responded with staus 403 and status text Forbidden');
    
    await linksPage.notFoundMethod();
    expect(message).toContain('Link has responded with staus 403 and status text Forbidden');
    
});
    