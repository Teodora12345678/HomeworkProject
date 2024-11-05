import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import { webTablesPage } from '../Pages/webTablesPage'; 

// Load JSON data
const zapisi = JSON.parse(fs.readFileSync('./tests/fixtures/data/webTables.json', 'utf-8'));

zapisi.webTables.forEach((record) => {
    test(`add new form for ${record.name}`, async ({ page }) => {
        const webTables = new webTablesPage(page);
        await webTables.goto();
        await webTables.addBtnMethod();
        await webTables.firstNameMethod(record.name);
        await webTables.lastNameMethod(record.lastName);
        await webTables.ageBtnMethod(record.age);
        await webTables.salaryMethod(record.salary);
        await webTables.departmentMethod(record.department);
        await webTables.submitBtnMethod(); // Submit the form

        const newUserRow = page.locator(`text=${record.name} ${record.lastName}`);
        await expect(newUserRow).toBeVisible(); 
    });
});
