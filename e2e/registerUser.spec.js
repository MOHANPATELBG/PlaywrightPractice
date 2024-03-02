const {test, expect} = require('@playwright/test');

test ('Sample test execution', async ({page})=> {

    let registerBtn = page.locator('a.text-reset');
    let firstName = page.locator(`input#firstName`);
    let lastName = page.locator('input#lastName');
    let email = page.locator(`[type='email']`);
    let phoneNum = page.locator(`input#userMobile`);
    let occupation = page.locator('select.custom-select');
    let gender = page.locator(`[value='Male']`);
    let pwd = page.locator('input#userPassword');
    let confirmPwd = page.locator('input#confirmPassword');
    let ageMandate = page.locator(`[formcontrolname='required']`);
    let registerUserBtn = page.locator(`input#login`);
    let successMsg = page.locator(`h1.headcolor`);

    await page.goto('https://rahulshettyacademy.com/client/');
    await registerBtn.click();

    //Register USER
    await firstName.fill('Mohan');
    await lastName.fill('Patel');
    await email.fill('mohan.patel1@gmail.com');
    await phoneNum.fill('9876543210');
    await occupation.selectOption('Engineer');
    await gender.check();
    await pwd.fill('Test12345');
    await confirmPwd.fill('Test12345');
    await ageMandate.check();
    await registerUserBtn.click();

    //verify successfull registration
    let msg = await successMsg.textContent();
    expect(msg).toContain('Account Created Successfully');
    console.log(msg)



   
});