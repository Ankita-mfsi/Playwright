import { test, expect } from '@playwright/test';

test('Single file upload', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/widgets/upload-download");

    await page.locator('#single-upload').setInputFiles("Documents/4md_PNG.png");
    await expect(page.locator("span[class='name']").first()).toHaveText("4md_PNG.png");

    //remove
    await page.locator('#single-upload').setInputFiles([]);
    await expect(page.locator("#single-preview .preview-item")).not.toBeVisible();

});

test.only('Multiple file upload', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/widgets/upload-download");

    await page.locator('#multi-upload').setInputFiles(['Documents/text file.txt', 'Documents/4md_PNG.png']);

    const expectedFiles = ['text file.txt', '4md_PNG.png'];
    await expect(page.locator('#multi-preview .name')).toHaveText(expectedFiles);
    
    

})