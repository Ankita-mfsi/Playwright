import { test, expect } from '@playwright/test';

test.only('built in locator', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.getByLabel("username").fill("rahulshettyacademy");
    await page.getByLabel("password").fill("Learning@830$3mK2");

    await page.locator("//span[text()=' User']").click();
    await page.locator("#okayBtn").click();

    await page.locator("//option[@value='stud']/parent::select").selectOption({label:'Consultant'});
    await page.getByRole("checkbox",{name:'I Agree to the terms and conditions'}).check();
    
    await page.locator('#signInBtn').click();

});

test("build in locators2",async({page})=>{
    await page.goto("https://demoqa.com/login");
    await expect(page).toHaveURL('https://demoqa.com/login');
    await expect(page.getByRole('heading',{name:'Login in Book Store'})).toBeVisible;

    await page.getByRole('button',{name:'New User'}).click();
    await page.getByPlaceholder("First Name").fill("Ankita");
    await page.locator("#lastname").fill("Gusain");
    await page.locator("//input[@placeholder='UserName']").fill("Ankita29");
    await page.getByPlaceholder("Password").fill("Ankita29");

    await page.getByRole("button",{name:'Register'}).click();
   
})
