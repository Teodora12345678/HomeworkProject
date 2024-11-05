import { test, expect } from '@playwright/test';
import { BookStorePage } from '../Pages/day3Demoqa/Bookstore.Page';

test.describe('Book Store Search Tests', () => {
    let bookStorePage: BookStorePage;

    test.beforeEach(async ({ page }) => {
        bookStorePage = new BookStorePage(page);
        await bookStorePage.goto();
    });

    test('should find specific book by title', async () => {
        const bookTitle = 'Git Pocket Guide'; 

        await bookStorePage.searchBook(bookTitle);
        const bookTitles = await bookStorePage.getBookTitles();

    
        expect(bookTitles).toContain(bookTitle);
    });
});
