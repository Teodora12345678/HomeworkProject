import { test, expect } from '@playwright/test';
import { TabsPage } from '../Pages/day3Demoqa/tab.page';


test.describe('Tabs Page Tests', () => {
    let tabsPage: TabsPage;

    test.beforeEach(async ({ page }) => {
        tabsPage = new TabsPage(page); 
        await tabsPage.goto(); 
    });

    test('should display content for Tab 1', async () => {
        await tabsPage.clickTab(tabsPage.tab1); // Click on Tab 1
        const content = await tabsPage.getTabContentText(); // Get the displayed content
        expect(content).toContain('What is the purpose of the Tabs?'); 
    });    

    test('should display content for Tab 2', async () => {
        await tabsPage.clickTab(tabsPage.tab2); // Click on Tab 2
        const content = await tabsPage.getTabContentText(); // Get the displayed content
        expect(content).toContain('Any Content Here'); 
    });

    test('should display content for Tab 3', async () => {
        await tabsPage.clickTab(tabsPage.tab3); // Click on Tab 3
        const content = await tabsPage.getTabContentText(); // Get the displayed content
        expect(content).toContain('This is the content of Tab 3'); // Assert the expected content
    });
});
