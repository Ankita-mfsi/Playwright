import { test, expect } from '@playwright/test';
import './custom-expect.js';

test('Page assertions', async ({ page }) => {
    await page.goto("https://www.flipkart.com/");
    await expect(page).toHaveTitle('Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!');
    await expect(page).toHaveURL("https://www.flipkart.com/");
})

test('Locator Assertions-Text&value', async ({ page }) => {
    await page.goto("https://www.flipkart.com/");
    let popup = page.locator("//span[@class='b3wTlE']/parent::div[@class='q7ywiQ']");

    if (popup.isVisible) {
        await page.locator("div span[role='button'][class='b3wTlE']").click();
    }
    await expect(page.locator("//span[text()='Login']")).toBeVisible();

    let searchBox = page.locator("//button[@type='submit']/following-sibling::div/input");
    await expect(searchBox).toBeEnabled();
    await searchBox.fill("Laptop");
    await expect(searchBox).toBeEditable();
    await expect(searchBox).toHaveValue("Laptop");
    await page.locator("button[type='submit']").click();

    let pagetitle = await page.title();
    await expect(page).toHaveTitle(pagetitle);
})
test('Locator assertions more ', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await expect(page).toHaveTitle("Swag Labs");

    let password = page.locator(".login_password");
    let errorMessage = page.locator(".error-button");

    await expect(page.locator("h4").last()).toContainText("Password");
    await expect(password).toHaveText("Password for all users:secret_sauce");

    await expect(errorMessage).toBeHidden();
})

test('Attribute assertion', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await expect(page).toHaveTitle("Swag Labs");

    let username = page.locator("[placeholder='Username']");
    let login = page.locator("#login-button");
    await expect(username).toHaveId('user-name');
    await expect(login).toHaveClass("submit-button btn_action");

    await username.fill("standard_user");
    await page.locator('#password').fill("secret_sauce");
    await login.click();

    let item = page.getByAltText('Sauce Labs Backpack');
    await expect(item).toHaveAttribute("alt", "Sauce Labs Backpack");
    await expect(page.locator('.inventory_item_description')).toHaveCount(6);

    let addTocart = page.locator("[id*='cart-sauce-labs-backpack']");
    await addTocart.click();

    //--update-snapshots to update the SS
    let cart = page.locator("[class*='cart_link']");
    await expect(cart).toHaveScreenshot("cart.png");
    await expect(cart).toBeEnabled();
})

test('Soft assertion ', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await expect.soft(page).not.toHaveTitle("Swag Labs");

    let password = await page.locator(".login_password").textContent();
    console.log(password);
})

async function customAssert(actual, expected) {
    expect(actual).toBe(expected);
}
test('custom assertion', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await customAssert(await page.title(), 'Swag Labs');
})

test.only('custom assertion1', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await customAssert(await page.title(), 'Swag Labs');

    let username = page.locator("[placeholder='Username']");
    let login = page.locator("#login-button");
    await expect(username).toHaveId('user-name');
    await expect(login).toHaveClass("submit-button btn_action");

    await username.fill("standard_user");
    await page.locator('#password').fill("secret_sauce");

    await login.click();

    let countImage = await page.locator("//button[text()='Add to cart']").count();
    console.log(countImage);
    await expect(40).toBeGreaterThan(countImage);
})
