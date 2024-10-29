import { test, expect } from '@playwright/test';
import { TextBoxPage } from '../Pages/day3Demoqa/texboxPage.ts'
import * as fs from 'fs';
const textbox = JSON.parse(fs.readFileSync('./tests/fixtures/data/texbox-validdata.json', 'utf-8'));

textbox.forEach((element) =>  {
  test(`test ${element.fullName}`, async ({ page }) => {
  const textBoxPage = new TextBoxPage(page);
  await textBoxPage.goto(); // Navigate to the Text Box page
  await textBoxPage.fillFullName(element.fullName);
  await textBoxPage.fillEmail(element.email);
  await textBoxPage.fillCurrentAddress(element.currentAddress);
  await textBoxPage.fillPermanentAddress(element.permanentAddress);
  
  await textBoxPage.submit(); // Submit the form
  // Verify the output
  const outputText = await textBoxPage.getOutputText();
  
  expect(outputText).toContain(element.fullName);
  expect(outputText).toContain(element.email);
  expect(outputText).toContain(element.currentAddress);
  expect(outputText).toContain(element.permanentAddress);
  });
})
