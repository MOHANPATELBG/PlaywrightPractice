const {test, expect} = require('@playwright/test');

test ('Sample test execution', async ({browser})=> {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await page.title());
    await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');
    await page.locator('input#username').fill('rahulshetty');
    await page.locator(`[type='password']`).fill('learning');
    await page.locator('input#signInBtn').click();
    console.log(await page.locator(`[style*="block"]`).textContent());
    expect(await page.locator(`[style*="block"]`).textContent()).toContain(`Incorrect username/password`);

    // expect(await page.locator('input#username').textContent()).toEqual('username');
    // expect(await page.locator(`[type='password']`).textContent()).toEqual('password');
    // expect(await page.locator(`input#signInBtn`).textContent()).toEqual('signin');
});