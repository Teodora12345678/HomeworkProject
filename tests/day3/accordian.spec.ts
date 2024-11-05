import { test, expect } from '@playwright/test';
import { AccordionPage } from '../Pages/day3Demoqa/Accordian.Page';


test.describe('Accordion Page Tests', () => {
    let accordionPage: AccordionPage;
   
    test.beforeEach(async ({ page }) => {
        const accordionPage = new AccordionPage(page);
        await accordionPage.goto();
    });

    test('expand Section 1 and verify content', async () => {
        await accordionPage.expandSection(accordionPage.section1Header);
        await accordionPage.verifySectionContentIsVisible(accordionPage.section1Content);
        await accordionPage.verifySectionContentText(accordionPage.section1Content, 'Lorem Ipsum');
    });

    test('expand Section 2 and verify content', async () => {
        await accordionPage.expandSection(accordionPage.section2Header);
        await accordionPage.verifySectionContentIsVisible(accordionPage.section2Content);
        await accordionPage.verifySectionContentText(accordionPage.section2Content, 'It is a long established fact');
    });

    test('expand Section 3 and verify content', async () => {
        await accordionPage.expandSection(accordionPage.section3Header);
        await accordionPage.verifySectionContentIsVisible(accordionPage.section3Content);
        await accordionPage.verifySectionContentText(accordionPage.section3Content, 'Contrary to popular belief');
    });
});
