import { test, expect } from '@playwright/test';
import { AutoCompletePage } from '../Pages/day3Demoqa/autocomplete.page';


test.describe('Auto Complete Page Tests', () => {
    let autoCompletePage: AutoCompletePage;

    test.beforeEach(async ({ page }) => {
        autoCompletePage = new AutoCompletePage(page);
        await autoCompletePage.goto();
    });

    test('should show suggestions when typing into the auto-complete field', async () => {
        const inputValue = 'a'; // Example input value
        await autoCompletePage.typeValue(inputValue);
        
        // Wait for suggestions to appear
        const resultsCount = await autoCompletePage.getResultsCount();
        
        // Assert that suggestions are shown
      expect(resultsCount).toBeGreaterThan(0);
        
        //  Verify the first result contains the expected text
        const firstResultText = await autoCompletePage.getResultText(0);
        expect(firstResultText).toContain('Aqua'); 
    });

    test('should show no suggestions for a non-matching input', async () => {
        const inputValue = 'xyz'; // Example input that should yield no results
        await autoCompletePage.typeValue(inputValue);
        
        // Wait for results to appear
        const resultsCount = await autoCompletePage.getResultsCount();
        
        // Assert that no suggestions are shown
        expect(resultsCount).toBe(0);
    });
});
