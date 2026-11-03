import { test, expect } from '@playwright/test';

test('Select dropdown', async ({ page }) => {
    await page.goto('https://jstestingacademy.co.in/qa-demo/forms/dropdowns.html');

    const dropdown = page.getByTestId('select-role');

    await dropdown.selectOption({ label: 'Manual Tester' });// here label is visible text
    await expect(dropdown).toHaveValue('manual');

    await dropdown.selectOption('lead');
    await expect(dropdown.locator('option:checked')).toHaveText('QA Lead');

    await dropdown.selectOption({ index: 3 });
    await expect(dropdown).toBeVisible('SDET');

});
test('Auto complete', async ({ page }) => {
    await page.goto("https://www.amazon.in/");

    await page.locator('#twotabsearchtextbox').fill("iphone");
    await page.locator("div[id*='autocomplete-results']").waitFor({ state: 'visible' });

    let suggestions = page.locator("div[id*='suggestion'] span");
    let count = await suggestions.count();

    //loop to click on iphone 18
    for (let i = 0; i < count; i++) {
        let item = await suggestions.nth(i).textContent();

        if (item.trim() == '18') {
            await suggestions.nth(i).click();
            break;
        }
    }
    await expect(page).toHaveTitle('Amazon.in : iphone 18');
})

test('multi select', async ({ page }) => {
    await page.goto('https://playwrightlab.github.io/index.html');
    await page.getByTestId("multi-select").selectOption(['React', 'Angular', 'Nuxt.js', 'Astro']);

    let expected = 'React, Angular, Nuxt.js, Astro';
    expect(page.locator('#selectedFrameworks')).toContainText(expected);

})

test('Cascading Dropdowns', async ({ page }) => {
    await page.goto('https://playwrightlab.github.io/index.html');

    let continent = page.getByTestId('cascade-continent');
    let country = page.getByTestId('cascade-country');
    let city = page.getByTestId('cascade-city');

    await continent.scrollIntoViewIfNeeded();

    //checking county is disable before selecting continent and enabled after selecting continent
    await expect(country).toBeDisabled();
    await continent.selectOption({ label: 'Europe' });
    await expect(continent).toHaveValue('europe');
    await expect(country).toBeEnabled();

    await expect(city).toBeDisabled();
    await country.selectOption('Uk');
    await expect(country).toHaveValue('uk');
    await expect(city).toBeEnabled();

    await city.selectOption('london');
    await expect(city).toHaveValue('london');
})

test.only('Bootstrap',async({page})=>{
    await page.goto("https://www.playwrightautomation.com/practice.html");
    
    let dropdown=page.locator("span[class*='select-care']");

    await dropdown.scrollIntoViewIfNeeded();
    await dropdown.click();
   
    await page.locator("ul[id*='job-title'] li").first();

    //add assertion

})

