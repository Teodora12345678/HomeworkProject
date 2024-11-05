import { test, expect } from '@playwright/test';
import { SelectablePage } from '../Pages/day3Demoqa/Selectable.Page';


test.describe('Selectable Page Tests', () => {
    let selectablePage: SelectablePage;

    test.beforeEach(async ({ page }) => {
        selectablePage = new SelectablePage(page); // Create an instance of SelectablePage
        await selectablePage.goto(); // Navigate to the Selectable page
    });

    test('should select an item and verify it is selected', async () => {
        const itemCount = await selectablePage.getSelectableItemsCount(); // Get the count of selectable items
        expect(itemCount).toBe(4); 
        
        // Select the first item (index 0)
        await selectablePage.clickSelectableItem(0);
        
        // Verify that the first item is selected
        const selectedItemClass = await selectablePage.getSelectableItemClass(0);
        expect(selectedItemClass).toContain('active'); // Check if the 'active' class is present
    });

    test('should allow multiple selections and verify their states', async () => {
        // Select the first item (index 0)
        await selectablePage.clickSelectableItem(0);
        // Select the second item (index 1)
        await selectablePage.clickSelectableItem(1);

        // Verify that both items are selected
        const firstItemClass = await selectablePage.getSelectableItemClass(0);
        const secondItemClass = await selectablePage.getSelectableItemClass(1);
        
        expect(firstItemClass).toContain('active'); // Check if the first item is selected
        expect(secondItemClass).toContain('active'); 
    });

    test('should deselect an item by clicking it again', async () => {
        // Select the first item (index 0)
        await selectablePage.clickSelectableItem(0);
        
        // Deselect the first item by clicking it again
        await selectablePage.clickSelectableItem(0);

        // Verify that the first item is not selected
        const selectedItemClass = await selectablePage.getSelectableItemClass(0);
        expect(selectedItemClass).not.toContain('active'); // Check if the 'active' class is absent
    });
});
