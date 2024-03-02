const {test, expect} = require('@playwright/test');

test ('Sample test execution', async ({page})=> {
    await page.goto('https://rahulshettyacademy.com/client/');
    await page.locator('#userEmail').fill(`mohan.patel1@gmail.com`);
    await page.locator('#userPassword').fill(`Test12345`);
    await page.locator(`[value='Login']`).click();
    //wait mechanisum
   // await page.waitForLoadState('networkidle'); //might be fleky
    await page.locator('.card-body b').last().waitFor();
    const titles = await page.locator('.card-body b').allTextContents();
    console.log(titles);
});