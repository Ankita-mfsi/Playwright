import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page.locator('[data-test="username"]')).toBeEmpty();
  await expect(page.locator('[data-test="password"]')).toBeEmpty();
  await expect(page.locator('[data-test="login-button"]')).toBeVisible();
  await expect(page.locator('[data-test="login-password"]').getByRole('heading')).toContainText('Password for all users:');
  await expect(page.locator('[data-test="login-container"]')).toMatchAriaSnapshot(`
    - form "Login":
      - textbox "Username"
      - textbox "Password"
      - button "Login"
    `);
});