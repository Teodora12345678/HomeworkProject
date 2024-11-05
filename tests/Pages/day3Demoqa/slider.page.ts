import { Page, Locator } from '@playwright/test';

export class SliderPage {
    page: Page; 
    slider: Locator; 
    sliderValue: Locator; 

    constructor(page: Page) {
        this.page = page;
        this.slider = page.locator('.range-slider .range-slider__thumb'); 
        this.sliderValue = page.locator('#sliderValue'); // Selector for the displayed slider value
    }

    async goto() {
        await this.page.goto('https://demoqa.com/slider');
    }

    async setSliderValue(value: number) {
        const sliderWidth = await this.slider.boundingBox(); // Get the slider's dimensions
        const offset = (value / 100) * (sliderWidth?.width || 0); // Calculate the offset based on the slider's width
        
        await this.slider.hover(); 
        await this.page.mouse.move(await this.slider.evaluate(el => el.getBoundingClientRect().left + window.scrollX), 
         await this.slider.evaluate(el => el.getBoundingClientRect().top + window.scrollY)); 
        await this.page.mouse.down(); // Click and hold the mouse button down
        await this.page.mouse.move(await this.slider.evaluate(el => el.getBoundingClientRect().left + window.scrollX) + offset, 
        await this.slider.evaluate(el => el.getBoundingClientRect().top + window.scrollY)); // Drag to the calculated offset
        await this.page.mouse.up(); // Release the mouse button
    }

    // Get the current value displayed on the slider
    async getSliderValue(): Promise<string> {
        return await this.sliderValue.textContent() || ''; // Return the displayed slider value
    }
}
