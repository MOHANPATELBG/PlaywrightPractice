const {test, expect} = require('@playwright/test');

test ('Sample test execution', async ({browser})=> {
    const context = await browser.newContext();
    const page = await context.newPage();

    let userName = page.locator('input#username');
    let pwd = page.locator(`[type='password']`);
    let signInBtn = page.locator('input#signInBtn');
    let cardTitles = page.locator('.card-body a');

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await page.title());
    await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');

    await userName.fill('rahulshetty');
    await pwd.fill('learning');
    await signInBtn.click();

    console.log(await page.locator(`[style*="block"]`).textContent());
    expect(await page.locator(`[style*="block"]`).textContent()).toContain(`Incorrect username/password`);

    await userName.fill('');
    await userName.fill('rahulshettyacademy');
    await signInBtn.click();
    
    console.log(await cardTitles.first().textContent());
    console.log(await cardTitles.nth(2).textContent());
    console.log(await cardTitles.last().textContent());
    let allTittles = await cardTitles.allTextContents();
    console.log(allTittles);

});