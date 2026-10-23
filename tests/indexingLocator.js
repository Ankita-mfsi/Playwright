import { test, expect } from '@playwright/test';

test.only('built in locator', async ({ page })=>{
    await page.goto("https://playwrightlab.github.io/")
    let row=await page.locator('#tableBody tr').nth(2);
    await row.scrollIntoViewIfNeeded();
    await row.getByTestId("row-check-3").check();;

    let firstRow=await page.locator('#tableBody tr').first();
    await expect(firstRow.getByText("alice@example.com")).toHaveText("alice@example.com");

  await page.locator('#pagination button').nth(3).click();
    let lastRow=await page.locator('#tableBody tr').last();
     await expect(lastRow.getByText("oscar@example.com")).toHaveText("oscar@example.com");
   
});