
import { test, expect } from '@playwright/test';
import { AlertsPage } from './Pages/alert-Page';

test.describe('Alert Tests', () => {
 
});

    test.beforeEach(async ({ page }) => {
        const alertsPage = new AlertsPage(page);
        await alertsPage.goto();
    
    test('Verify simple alert', async () => {
        await alertsPage.triggerAlertAndVerifyMethod();
    });
    
    test('Verify confirm alert and accept', async () => {
        // Trigger the confirm alert, accept it, and verify the result
        await alertsPage.triggerConfirmAndVerify(true);
    });

    test('Verify confirm alert and dismiss', async () => {
        // Trigger the confirm alert, dismiss it, and verify the result
        await alertsPage.triggerConfirmAndVerify(false);
    });

    test('Verify prompt alert and input text', async () => {
        // Trigger the prompt alert, input some text, and verify the result
        await alertsPage.triggerPromptAndVerify('Test User');
    });
});


//homework 4 
//Diaglogs 
// after navigation of a page 
// page.on('dialog', dialog => dialog.accept ());
// page.on('dialog', dialog => dialog.dismiss());

//Before load Dialogs 
// page.on('dialog' async dialog => {
// assert(dialog.type()== 'beforeunloaded');
// await dialog.dismiss();
//});
// await.page.close({rinBeforeUnload: true});