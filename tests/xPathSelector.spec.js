import {test,expect} from '@playwright/test';

test('Selector',async({page})=>{
await page.goto('https://www.amazon.in/');
await page.locator("//input[@id='twotabsearchtextbox']").fill('laptop');
await page.locator("//input[@type='submit']").click();


});
test('SelectorMakeMytrip',async({page})=>{
await page.goto("https://www.booking.com/?chal_t=1792632420151&force_referer=/");
await page.locator("//button[@aria-label='Dismiss sign-in info.']").click();
await page.locator("//a[@id='airport_taxis']/descendant::span[contains(text(),'Airport')]").click();

await page.locator("//input[contains(@placeholder,'pick-up location')]").fill("Dehradun");
await page.locator("//div/descendant::div[text()='Dehradun Airport']").click();

await page.locator("//input[@placeholder='Enter destination']").fill("chen");
await page.locator("//div/descendant::div[text()='Chennai International Airport']").click();

await page.locator('select[name="passengers"]').selectOption({index:3});

await page.locator("//button[@type='submit']").click();
await expect(page.locator("//div[contains(text(),'Please try again')]/preceding-sibling::div")).toHaveText("No results found");

});

