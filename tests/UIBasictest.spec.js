const { test, expect } = require('@playwright/test');
test('First Playwright test', async({page})=> {
await page.goto("https://playwright.dev/docs/test-configuration");
});

test('Google assertion', async ({page})=>{
await page.goto("https://www.google.com/");
await expect(page).toHaveTitle("Google");

});