import {test,expect} from '@playwright/test';

test('Select dropdown',async({page})=>{

await page.goto('https://jstestingacademy.co.in/qa-demo/forms/dropdowns.html');

const dropdown= page.getByTestId('select-role');

await dropdown.selectOption({label:'Manual Tester'});
await expect(dropdown).toHaveValue('manual');

await dropdown.selectOption('lead');
await expect(dropdown.locator('option:checked')).toHaveText('QA Lead');

await dropdown.selectOption({index:3});
await expect(dropdown).toBeVisible('SDET');

});

