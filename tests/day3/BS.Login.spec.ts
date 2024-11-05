import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/day3Demoqa/LoginPage';

test.describe('Login Page Tests', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
    });

    test('should login successfully with valid credentials', async () => {
        await loginPage.login('test@hotmail.com', 'test123'); 
        const isLoggedIn = await loginPage.isLoggedIn();
        expect(isLoggedIn).toBeTruthy(); 
        
    });

    test('should show error message with invalid credentials', async () => {
        await loginPage.login('invalidUsername', 'invalidPassword');
        const errorMessage = await loginPage.getErrorMessage();
        expect(errorMessage).toContain('Invalid username or password!'); 
    });
});
