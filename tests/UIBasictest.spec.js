const { test } = require('@playwright/test');
test('First Playwright test', async({page})=> {
await page.goto("https://playwright.dev/docs/test-configuration");
});