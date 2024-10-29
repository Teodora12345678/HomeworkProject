import { test, expect, Page, Locator } from '@playwright/test';

export class demoqaLoginPage {
  readonly page: Page;
  readonly usernameFiled: Locator;
  readonly passwordField: Locator;
  readonly loginButton: Locator;
  
  constructor(page:Page){
    this.page = page;
    this.usernameFiled = page.locator('#UserName');
    this.passwordField = page.locator('#Password');
    this.loginButton = page.locator('#login')
  }

  async goto() {
    await this.page.goto('https://demoqa.com/login');
  }
  
  async logoutButtonIsVisible() {
    return await this.page.locator('[data-test="logout-button"]').isVisible(); 
}

async errorMessageIsVisible() {
    return await this.page.locator('[data-test="error-message"]').isVisible(); 
}

  async login(username: string, password: string) {
    await this.usernameFiled.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }
}
