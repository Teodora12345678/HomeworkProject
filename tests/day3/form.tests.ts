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
        gender: 'Male', // Options: Male, Female, Other
        mobile: '1234567890',
        subjects: ['Math', 'English'], // Adjust as needed
        hobbies: ['Sports', 'Music'], // Adjust as needed
        address: 'ulica',
        state: 'NCR', 
        city: 'Delhi' 
    };

    // Fill out the form
    await practiceFormPage.fillForm(formData);

    // For example, check for a success message or that the form has been submitted
});
