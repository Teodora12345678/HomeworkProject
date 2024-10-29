import { Page, Locator, expect } from '@playwright/test';

export class LinksPage {
    readonly page: Page;
    readonly homeLink: Locator;
    readonly homerMotsLink: Locator;
    readonly createdLink: Locator;
    readonly noContenLink: Locator;
    readonly movedLink: Locator;
    readonly badRequest: Locator;
    readonly forbidden: Locator;
    readonly unauthorized:Locator;
    readonly notFoundLink:Locator;


    constructor(page: Page) {
        this.page = page;
        this.homeLink = page.locator("#simpleLink");
        this.homerMotsLink = page.locator("#dynamicLink");
        this.createdLink = page.locator("#created");
        this.noContenLink = page.locator("#no-content");
        this.movedLink= page.locator("#moved");
        this.badRequest = page.locator("#bad-request");
        this.forbidden = page.locator("#forbidden");
        this.unauthorized = page.locator("#unauthorized");
        this.notFoundLink = page.locator("#invalid-url");
    }

    async goto() {
        await this.page.goto('https://demoqa.com/links'); 
    }

    async homeLinkmethod() {
        await this.homeLink.click();
    }

    async homerMotsLinkmethod() {
        await this.homerMotsLink.click();
    }

    async createdLinkMethod() {
        await this.createdLink.click();
    }
    async noContenLinkMethod() {
        await this.noContenLink.click();
    }
    async badRequestMethod() {
        await this.badRequest.click();
    }

    async unauthorizedMethod() {
        await this.unauthorized.click();
    }

    async forbiddenMethod() {
        await this.forbidden.click();
    }

    async movedLinkMethod() {
        await this.movedLink.click();
    }

    async notFoundMethod() {
        await this.notFoundLink.click();
    }

}
