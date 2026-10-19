import {test,expect} from '@playwright/test';
import { only } from 'node:test';
 test('page handling',async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
await expect(page).toHaveTitle('Automation Testing Practice: PlaywrightPractice');

const [childTab]=await Promise.all([page.context().waitForEvent('page'),page.locator('text=New Tab').click()]);
await childTab.waitForLoadState();
await expect(childTab).toHaveTitle("SDET-QA Blog");

const [thirdTab] = await Promise.all([page.context().waitForEvent('page'),page.locator('text=Blogger').click()]);
  await thirdTab.waitForLoadState();
  await expect(thirdTab).toHaveTitle("Blogger.com - Create a unique and beautiful blog easily.");
});

test.only('pop up window', async ({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
await expect(page).toHaveTitle('Automation Testing Practice: PlaywrightPractice');
const [childPopUp]=await Promise.all([page.context().waitForEvent('page'),page.locator('text=Popup Windows').click()]);
await childPopUp.waitForLoadState();
await expect(childPopUp).toHaveTitle("Selenium");
});

