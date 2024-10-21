import { test, expect } from '@playwright/test';
test.describe ("Test suite", () =>{

test('test', async ({ page }) => {
  await page.goto('/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  
  await expect(page.locator('[data-test="title"]')).toBeVisible();
  await expect(page.getByText('Swag Labs')).toBeVisible();

 // await expect(page.locator('[data-test="title"]')).toBeVisible();
  await page.locator('[data-test="title"]').click();
// TASK 1
  //await expect(page.locator('[data-test="title"]')).toBeVisible();
  await expect(page.locator('[data-test="title"]')).toContainText('Products');
});
});