
import { Page, Locator, expect } from '@playwright/test';

export class AlertsPage {
    readonly page: Page;
    readonly alertButton: Locator;
    readonly confirmButton: Locator;
    readonly promptButton: Locator;
    readonly resultText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.alertButton = page.locator('#alertButton');
        this.confirmButton = page.locator('#confirmButton');
        this.promptButton = page.locator('#promptButton');
        this.resultText = page.locator('#result'); // Text that shows after interaction
    }
    async goto() {
        await this.page.goto('https://demoqa.com/alerts');
    }

    async triggerAlertAndVerifyMethod() {
        await this.alertButton.click();
        
        // Handle the alert
        this.page.on('dialog', async dialog => {
            expect(dialog.message()).toBe('You clicked a button');
            await dialog.accept();
        });
    }
    
    // Trigger the confirm alert and verify it
    async triggerConfirmAndVerify(accept: boolean = true) {
        await this.confirmButton.click();

        // Handle the confirm dialog
        this.page.on('dialog', async dialog => {
            expect(dialog.message()).toBe('Do you confirm action?');
            if (accept) {
                await dialog.accept(); // Accept the confirm dialog
            } else {
                await dialog.dismiss(); // Dismiss the confirm dialog
            }
        });

        // Verify result text after accepting/dismissing the dialog
        if (accept) {
            await expect(this.resultText).toHaveText('You selected Ok');
        } else {
            await expect(this.resultText).toHaveText('You selected Cancel');
        }
    }

    async triggerPromptAndVerify(inputText: string = 'Hello') {
        // Click the "Prompt" button
        await this.promptButton.click();

        // Handle the prompt dialog
        this.page.on('dialog', async dialog => {
            expect(dialog.message()).toBe('Please enter your name');
            await dialog.accept(inputText); // Accept with the input text
        });

        // Verify the result after inputting the text
        await expect(this.resultText).toHaveText(`You entered ${inputText}`);
    }
}
