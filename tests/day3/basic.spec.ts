import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/search?q=demoqa&oq=demoqa&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDIyMDZqMGoyqAIAsAIB&sourceid=chrome&ie=UTF-8');
  await page.getByRole('link', { name: 'DEMOQA DEMOQA https://demoqa.' }).click();
  await page.locator('svg').first().click();
  await page.locator('li').filter({ hasText: 'Check Box' }).click();
  await page.locator('#tree-node').getByRole('img').nth(3).click();
  await expect(page.locator('#tree-node path').nth(3)).toBeVisible();
  await page.getByLabel('Toggle').click();
  await page.locator('label').filter({ hasText: 'Desktop' }).getByRole('img').first().click();
  await expect(page.locator('label').filter({ hasText: 'Desktop' }).locator('path').first()).toBeVisible();
  await page.locator('label').filter({ hasText: 'Desktop' }).getByRole('img').first().click();
  await page.locator('li').filter({ hasText: /^Desktop$/ }).getByLabel('Toggle').click();
  await page.locator('label').filter({ hasText: 'Notes' }).locator('path').first().click();
});