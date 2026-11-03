import { test, expect } from '@playwright/test';

test.skip("Keywboard actions", async ({ page }) => {
    await page.goto("https://text-compare.com/");

    await page.keyboard.down('Shift');
    await page.keyboard.type('ankita');
    await page.keyboard.up('Shift');
    //Check with apply wait
})
test.only("Check keyboard actions", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/key_presses");

    await page.locator("#target").click();

    await page.keyboard.type("ankita");

    await page.keyboard.press("Control+A");
    await page.keyboard.press("Control+C");
    await page.keyboard.press("ArrowRight");
    await page.keyboard.press("Space");
    await page.keyboard.press("Control+V");

    // Type uppercase A by pressing Shift + a
    await page.keyboard.press("Shift+a");

    
    await page.goto('https://www.amazon.in/');

let box= page.locator('#twotabsearchtextbox');
await box.click();
await box.pressSequentially('laptop');
await page.keyboard.press('Shift+a');


console.log(await page.locator('#twotabsearchtextbox').inputValue());
   


})