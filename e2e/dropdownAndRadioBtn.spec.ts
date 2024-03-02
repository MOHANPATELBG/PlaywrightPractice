const {test, expect} = require('@playwright/test');

test.only ('Sample test execution', async ({page})=> {

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await page.title());
    await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');
    await page.locator('input#username').fill('rahulshetty');
    await page.locator(`[type='password']`).fill('learning');
    let dropdown = await page.locator('select.form-control');
    await dropdown.selectOption('Consultant');
    let radioBtn = await page.locator('.radiotextsty').last();
    expect(await radioBtn.isChecked()).toBeFalsy();
    //let radioBtn = await page.locator('.radiotextsty').nth(1); line 12 and 13 both are same
    await radioBtn.check();
    expect(radioBtn).toBeChecked();

    await page.locator('#okayBtn').click();
    await page.locator('input#signInBtn').click();


});