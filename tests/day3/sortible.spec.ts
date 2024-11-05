import { test, expect } from '@playwright/test';
import { SortablePage } from '../Pages/day3Demoqa/Sortable.Page';


test.describe('Sortable Page Tests', () => {
    let sortablePage: SortablePage;

    test.beforeEach(async ({ page }) => {
        sortablePage = new SortablePage(page); 
        await sortablePage.goto(); 
    });

    test('should have correct initial item order', async () => {
        const itemCount = await sortablePage.getSortableItemsCount(); // Get count of sortable items
        expect(itemCount).toBe(6); 
        
        // Verify the initial order of items
        const initialOrder = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];
        for (let i = 0; i < itemCount; i++) {
            const itemText = await sortablePage.getSortableItemText(i);
            expect(itemText).toBe(initialOrder[i]); 
        }
    });

    test('should allow dragging and dropping of items', async () => {
        await sortablePage.dragAndDropItem(0, 4); // Drag 'One' (index 0) to the end (index 4)
        
        // Verify the new order after drag and drop
        const newOrder = ['Two', 'Three', 'Four', 'Five', 'One'];
        for (let i = 0; i < newOrder.length; i++) {
            const itemText = await sortablePage.getSortableItemText(i);
            expect(itemText).toBe(newOrder[i]); // Validate the order after dragging
        }
    });
});
