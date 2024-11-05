// tests/practiceForm.spec.ts
import { test, expect } from '@playwright/test';
import { FormPage } from '../Pages/day3Demoqa/formPage';

test('Fill out the practice form', async ({ page }) => {
const practiceFormPage = new FormPage(page);

await practiceFormPage.goto();
    // Define form data
    const formData = {
        firstName: 'Tea',
        lastName: 'pt',
        email: 'tt.99@example.com',
        gender: 'Male', // 
        mobile: '1234567890',
        subjects: ['Math', 'English'], 
        hobbies: ['Sports', 'Music'], 
        address: 'ulica',
        state: 'NCR', 
        city: 'Delhi' 
    };

    // Fill out the form
    await practiceFormPage.fillForm(formData);

});
