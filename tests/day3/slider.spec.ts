import { test, expect } from '@playwright/test';
import { SliderPage } from '../Pages/day3Demoqa/slider.page';


test.describe('Slider Page Tests', () => {
    let sliderPage: SliderPage;

    test.beforeEach(async ({ page }) => {
        sliderPage = new SliderPage(page); 
        await sliderPage.goto(); 
    });

    test('should move the slider to 50 and check the value', async () => {
        await sliderPage.setSliderValue(50); // Set the slider to 50
        const value = await sliderPage.getSliderValue(); // Get the displayed value
        expect(value).toBe('50'); // Assert that the displayed value is 50
    });
});
