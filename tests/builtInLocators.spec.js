import { test, expect } from '@playwright/test';

test('built in locator', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.getByLabel("username").fill("rahulshettyacademy");
    await page.getByLabel("password").fill("Learning@830$3mK2");

    //Radio button added assertion
    await page.locator("//span[text()=' User']").check();
    await page.locator("#okayBtn").click();
    await expect(page.locator("input[value='user']")).toBeChecked();

    await page.locator("//option[@value='stud']/parent::select").selectOption({ label: 'Consultant' });
    //link
    await page.getByRole('link', { name: 'Free Access to InterviewQues' }).click();

    //Checkbox added assertion and used uncheck
    await page.getByRole("checkbox", { name: 'I Agree to the terms and conditions' }).check();
    await expect(page.locator("#terms")).toBeChecked();
    await page.locator("#terms").uncheck();
    await expect(page.locator("#terms")).not.toBeChecked();

    await page.locator('#signInBtn').click();

});

test("build in locators2", async ({ page }) => {
    await page.goto("https://demoqa.com/login");
    await expect(page).toHaveURL('https://demoqa.com/login');
    await expect(page.getByRole('heading', { name: 'Login in Book Store' })).toBeVisible;

    await page.getByRole('button', { name: 'New User' }).click();
    await page.getByPlaceholder("First Name").fill("Ankita");

    //textbox
    await page.getByRole('textbox', { name: 'Last Name' }).fill('Gusain');

    await page.locator("//input[@placeholder='UserName']").fill("Ankita29");
    await page.getByPlaceholder("Password").fill("Ankita29");

    await page.getByRole("button", { name: 'Register' }).click();

})
test.only("Testing getByAltText", async ({ page }) => {
   await page.goto("https://playwright.dev/");
   await page.getByAltText("Playwright logo").first().click();

})
