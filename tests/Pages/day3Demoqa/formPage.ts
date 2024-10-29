// Pages/PracticeFormPage.ts
import { Page, Locator, expect } from '@playwright/test';

export class FormPage {
    readonly page: Page;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly emailInput: Locator;
   // readonly genderRadio: Locator;
    readonly maleGender: Locator;
    readonly femaleGender: Locator;
    readonly mobileInput: Locator;
    readonly other: Locator;
    readonly subjectInput: Locator;
    readonly hobbiesCheckbox: Locator;
    readonly addressInput: Locator;
    readonly stateSelect: Locator;
    readonly citySelect: Locator;
    readonly submitButton: Locator;
    readonly dateoBirth: Locator

    constructor(page: Page) {
        this.page = page;
        this.firstNameInput = page.locator('#firstName');
        this.lastNameInput = page.locator('#lastName');
        this.emailInput = page.locator('#userEmail');
        //this.genderRadio = page.locator('input[name="gende'); 
        this.femaleGender = page.locator('#gender-radio-2');
        this.maleGender = page.locator('#gender-radio-1');
        this.dateoBirth = page.locator('dateOfBirthInput');
        this.mobileInput = page.locator('#userNumber');
        this.subjectInput = page.locator('#subjectsInput');
        this.hobbiesCheckbox = page.locator('input[type="checkbox"]'); // general locator for hobbies
        this.addressInput = page.locator('#currentAddress');
        this.stateSelect = page.locator('#state');
        this.citySelect = page.locator('#city');
        this.submitButton = page.locator('#submit');
    }
    async goto() {
        await this.page.goto('https://demoqa.com/automation-practice-form');
    }

    async firstNameInputMethod(firstNameInput: string) {
        await this.firstNameInput.fill(firstNameInput); // 
    }
    
    async emailInputMethod (emailInput: string) {
        await this.emailInput.fill(emailInput);  
    }

     async subjectInputMethod (subjectInput: string) {
     await this.emailInput.fill(subjectInput);  
    }

    async addressInputMethod (subjectInput: string) {
        await this.emailInput.fill(subjectInput);  
    }

    async mobileInputMethod(mobileInput: string) {
        await this.emailInput.fill(mobileInput);
    }

    async selectMale() {
        await this.maleGender.click();
    }
     
    async femaleGenderMethod() {
        await this.femaleGender.click();
// do ovde sum
        async dateofBirtMethod(date: string) {
            await this.page.click(this.dateoBirth);
            await this.page.fill(this.dateoBirth, date); 

    // Select gender
    //await this.genderRadio.locator(`input[value="${data.gender}"]`).check();
     
      // Select subjects
        for (const subject of data.subjects) {
            await this.subjectInput.fill(subject);
            await this.page.keyboard.press('Enter'); // Select the subject
        }

        // Select hobbies
       // for (const hobby of data.hobbies) {
            await this.hobbiesCheckbox.locator(`label:has-text("${hobby}")`).click();
        }

    
        // Select state
        await this.stateSelect.selectOption(this.stateSelect);

        // Select city
        await this.citySelect.selectOption(data.city);

        await this.submitButton.click();
    }
}
