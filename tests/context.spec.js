import {test} from '@playwright/test';

test("Browser context test",async({browser})=>
{
const context= await browser.newContext();
const page=await context.newPage();
await page.goto("https://playwright.dev/");
let title=await page.title();
console.log(title);
})