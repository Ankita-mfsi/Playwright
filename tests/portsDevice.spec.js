import {test,expect} from '@playwright/test';

//test.use({viewport:{width:500,height:407}})

test('Google assertion', async ({page})=>{
await page.goto("https://www.google.com/");
await expect(page).toHaveTitle("Google");

});