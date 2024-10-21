import { test, expect } from '@playwright/test';
test.describe ("Test suite for update user", () =>{

    test.beforeEach('Navigate to Log in page', async({page})=> {
        await page.goto('/')
    })

test.describe ("Test suite for update username tests", () =>{

  test('update username with valid username', async ({ page }) => {

});

  test('update username with invalid username', async ({ page }) => {

});

test('update username with empty username', async ({ page }) => {

});

test.describe ("Test suite for update user pasword tests", () =>{
  test('update password', async ({ page }) => {

});
});
});

test.afterEach ("tear down for out test", async()=>{
    
})

});
