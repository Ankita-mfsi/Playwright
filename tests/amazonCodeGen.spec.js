import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('laptop');
  await page.getByRole('button', { name: 'laptop under 35000' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: '₹34,999 M.R.P: ₹71,999 M.R.P: ₹' }).click();
  const page1 = await page1Promise;
  await page1.goto('https://www.amazon.in/Acer-Smartchoice-3-7320U-35-56cm-A114-43/dp/B0GYRK1RZC/ref=sr_1_1?crid=3JAKCR33XVO2T&dib=eyJ2IjoiMSJ9.zsoXwao-RGbjc7g3YcUwkwhmIfYyVjYh3aNnRy47_WaB-JoaqMkUl1fSltRGXp-6Rs27dMA92qVxqtQ_NRjiPyw4dVNyQIrYbM7P4Y87npjxcTzVlE6YL9I37xHb6rLzS--qz2vdKKXfqDzARjxsNfJUcMuwEnVzOUsNQsWkngrEZjXHmuuiVynkYJ7YK7JkFkhQqusC714AoInsI181TFn6qcfiLB21avhRQwLgwr4.WDCE8ai3gkoqo0TvZU_m-5H2XrydCGWDiY6cTjcOEiM&dib_tag=se&keywords=laptop%2Bunder%2B35000&qid=1791952436&sprefix=laptop%2Caps%2C303&sr=8-1&th=1');
  await page1.getByRole('button', { name: 'Add to cart' }).click();
  await page1.getByRole('link', { name: 'item in cart' }).click();
  await page1.getByRole('group', { name: 'Quantity is' }).getByLabel('Delete Acer Smartchoice').click();
  await expect(page1.getByRole('heading', { name: 'Shopping Cart' })).toBeVisible();
});