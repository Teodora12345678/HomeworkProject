import { Page, Locator } from '@playwright/test';

export class webTablesPage {
    readonly page: Page;
    readonly addBtn: Locator;        
    readonly firstName: Locator;  
    readonly lastName: Locator;
    readonly age:Locator;
    readonly salary:Locator;
    readonly department:Locator;
    readonly submitBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addBtn = page.locator('.btn btn-primary');
        this.firstName = page.locator('#firstName'); 
        this.lastName = page.locator('#lastName');
        this.age = page.locator('#age');
        this.salary = page.locator('#salary');
        this.department = page.locator('#department');
        this.submitBtn = page.locator('#submit');
    }
    async goto() {
        await this.page.goto('https://demoqa.com/webtables');
       }
   
    async addBtnMethod() {
        await this.addBtn.click();
    }

    async firstNameMethod(name: string) {
        await this.firstName.fill(name);
    }
    async lastNameMethod(lastName: string) {
        await this.lastName.fill(lastName);
    }
    async ageBtnMethod(age: string) {
        await this.age.fill(age);
    }
    async salaryMethod(salary: string) {
        await this.age.fill(salary);
    }
      
    async departmentMethod(department: string) {
        await this.age.fill(department);
    }
      async submitBtnMethod() {
        await this.submitBtn.click();
    }

}


