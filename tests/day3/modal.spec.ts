import { test, expect } from '@playwright/test';
import { ModalDialogsPage } from '../Pages/day3Demoqa/modals.page';

test('test open and close the small modal', async ({ page }) => {
    const modalDialogsPage = new ModalDialogsPage(page);
    
    await page.goto('https://demoqa.com/modal-dialogs');
    
    // Open and verify small modal
    await modalDialogsPage.openSmallModal();
    await modalDialogsPage.verifySmallModalIsVisible();
    
    // Close and verify small modal
    await modalDialogsPage.closeSmallModal();
    await modalDialogsPage.verifySmallModalIsHidden();
});

test('should open and close the large modal', async ({ page }) => {
    const modalDialogsPage = new ModalDialogsPage(page);
    
    await page.goto('https://demoqa.com/modal-dialogs');
    
    // Open and verify large modal
    await modalDialogsPage.openLargeModal();
    await modalDialogsPage.verifyLargeModalIsVisible();
    
    // Close and verify large modal
    await modalDialogsPage.closeLargeModal();
    await modalDialogsPage.verifyLargeModalIsHidden();
});
