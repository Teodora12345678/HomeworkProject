import { test, expect } from '@playwright/test';
import { ResizablePage } from '../Pages/day3Demoqa/Resizable.Page';


test.describe('Resizable Page Tests', () => {
    let resizablePage:ResizablePage;

    test.beforeEach(async ({ page }) => {
        resizablePage = new ResizablePage(page);
        await resizablePage.goto();
    });

    test('should resize the element and verify new size', async () => {
        // Get the initial size of the resizable element
        const initialSize = await resizablePage.getElementSize();
        console.log(`Initial size: Width: ${initialSize.width}, Height: ${initialSize.height}`);

        // Define the amount to resize
        const deltaX = 50; // Increase width by 50 pixels
        const deltaY = 30; // Increase height by 30 pixels

        // Resize the element
        await resizablePage.resizeElement(deltaX, deltaY);

        // Get the new size of the element
        const newSize = await resizablePage.getElementSize();
        console.log(`New size: Width: ${newSize.width}, Height: ${newSize.height}`);

        // Verify that the size has changed as expected
        expect(newSize.width).toBeCloseTo(initialSize.width + deltaX, 1); // Allow slight margin for resizing accuracy
        expect(newSize.height).toBeCloseTo(initialSize.height + deltaY, 1);
    });
});
