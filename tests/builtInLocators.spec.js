import { test, expect } from '@playwright/test';

test('built in locator', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.getByLabel("username").fill("rahulshettyacademy");
    await page.getByLabel("password").fill("Learning@830$3mK2");
    await page.getByText(" User").click();
    await page.locator("#terms").click();
    

});