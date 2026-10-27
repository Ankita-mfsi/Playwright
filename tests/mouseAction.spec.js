import {test,expect} from '@playwright/test';

test.only("Hover right and left click",async({page})=>{
await page.goto("https://www.amazon.in/");
let bar=page.locator("#nav-tools");
// await page.locator("span [class*='icp-nav-flag-in']").hover();
// await expect(page.locator("//span[contains(text(),'Language')]")).toBeVisible(); to ask divjot
await page.locator("span[id*='accountList']").hover();
await expect(page.locator("//span[text()='Sign in']").first()).toBeVisible();

await page.locator("a[id*='logo']").click({button: 'right'});

await page.locator("#twotabsearchtextbox").fill("key chain");
await page.locator("input[id*='submit-button']").click({button: 'left'});
await page.waitForTimeout(6000);

await page.goto("https://testpages.eviltester.com/pages/interaction/javascript-events/");
await page.locator("#ondoubleclick").dblclick();
await expect(page.locator("#ondoubleclickstatus")).toHaveText("Event Triggered");




})
test("Drag and drop",async({page})=>{
await page.goto("https://the-internet.herokuapp.com/context_menu");
await page.locator("#hot-spot").right
})