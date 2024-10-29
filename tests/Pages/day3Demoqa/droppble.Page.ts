import { Page, Locator, expect } from '@playwright/test';

export class DropPage {
    readonly page: Page;
    readonly dragBox: Locator;
    readonly droppBox: Locator;
 //readonly dragAndDropMethod: Locator;

    constructor(page: Page) {
        this.page = page;
        this.page = page;
        this.dragBox = page.locator("#draggable");
        this.droppBox = page.locator(".drop-box ui-droppable");
      //this.dragAndDropMethod = page.locator("#droppable");

    }
    async goto() {
        await this.page.goto('https://demoqa.com/droppable'); 
    }
    async performDragAndDrop() {
        // await this.dragBox.scrollIntoViewIfNeeded();
        // await this.dragBox.dragTo(this.droppBox);
        await this.dragBox.dragTo(this.droppBox, { timeout: 100000 });
    }
    
    async getDropTextMethod() {
       return await this.droppBox.textContent(); // Get text from the drop target
    }

   // await page.locator("#draggable").dragTo(page."#droppable"));
    
    }


  
