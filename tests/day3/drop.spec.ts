import { test, expect } from '@playwright/test';
import { DropPage } from '../Pages/day3Demoqa/droppble.Page';

test('Buttons click', async ({ page }) => {
    const dropPage = new DropPage(page);

    await dropPage.goto(); 
    
    //perform drag and drop
    await dropPage.performDragAndDrop();
   
    const dropedmessage = await dropPage.getDropTextMethod();
    expect(dropedmessage).toContain('Dropped');
    
});