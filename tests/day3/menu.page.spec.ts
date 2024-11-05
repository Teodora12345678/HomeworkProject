import { test, expect } from '@playwright/test';
import { MenuItem2Page } from '../Pages/day3Demoqa/Menu.Page';


test.describe('Menu Item 2 Tests', () => {
    let menuItem2Page: MenuItem2Page;

    test.beforeEach(async ({ page }) => {
        menuItem2Page = new MenuItem2Page(page); 
        await menuItem2Page.goto(); 
    });

    test('should display submenu items on hover', async () => {
        await menuItem2Page.hoverOverMenuItem2(); 
        const submenuItemText = await menuItem2Page.getSubmenuItemText(0); 
        expect(submenuItemText).toContain('Sub Item'); 
    });

    test('should click on submenu item and verify text', async () => {
        await menuItem2Page.hoverOverMenuItem2(); 
        await menuItem2Page.clickSubmenuItem(1); 
        const submenuItemText = await menuItem2Page.getSubmenuItemText(1); 
        expect(submenuItemText).toContain('Sub Item'); 
    });
});
