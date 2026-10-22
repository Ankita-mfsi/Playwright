import {test,expect} from '@playwright/test';

test('Selector',async({page})=>{
await page.goto('https://www.amazon.in/');
await page.locator('#twotabsearchtextbox').fill('laptop');
await page.locator("[type='submit']").click();


});
test('SelectorMakeMytrip',async({page})=>{
await page.goto("https://www.makemytrip.com/flights/");
await page.locator("li[class='menu_Hotels']").click();
let a=await page.locator("ul[class^='fswTabs'] li:nth-child(2)").textContent();
console.log(a);

});