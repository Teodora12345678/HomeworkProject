import { test, expect } from '@playwright/test';
import { UploadsPage } from '../Pages/day3Demoqa/uploadanddownloadPage';

test('Check Broken Link', async ({ page }) => {
    const uploadsPage = new UploadsPage (page);
    
    await uploadsPage.goto();
    
    await uploadsPage.uploadFilemethod("C:/Users/tpe/Downloads/pexels-photo-28943579.jpeg");
    
});
