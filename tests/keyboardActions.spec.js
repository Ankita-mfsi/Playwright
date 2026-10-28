import { test, expect } from '@playwright/test';

test.skip("Keywboard actions", async ({ page }) => {
    await page.goto("https://text-compare.com/");

    await page.keyboard.down('Shift');
    await page.keyboard.type('ankita');
    await page.keyboard.up('Shift');
    //Check with apply wait
})
test("Check keyboard actions", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/key_presses");
    await page.locator("#target").click();

    await page.keyboard.type("ankita");

    await page.keyboard.press('Control+A');
    await page.keyboard.press('Control+C');
    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('Space');
    await page.keyboard.press('Control+V');
    await page.keyboard.down('Shift');
    await page.keyboard.press('a');
    await page.keyboard.up('Shift');


    await page.waitForTimeout(5000);

})