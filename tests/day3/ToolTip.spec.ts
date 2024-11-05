import { test, expect } from '@playwright/test';
import { ToolTipsPage } from '../Pages/day3Demoqa/ToolTips.page';

test.describe('Tool Tips Page Tests', () => {
    let toolTipsPage: ToolTipsPage;

    test.beforeEach(async ({ page }) => {
        toolTipsPage = new ToolTipsPage(page); 
        await toolTipsPage.goto();
    });

    test('should display tooltip text on hover', async () => {
        await toolTipsPage.hoverOverTooltipButton(); 
        const tooltipText = await toolTipsPage.getTooltipText(); 
        expect(tooltipText).toBe('You hovered over the Button!'); 
    });
});
