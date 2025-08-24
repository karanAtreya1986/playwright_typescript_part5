import {test, expect,  Browser,  Page, Locator, BrowserContext} from '@playwright/test'
import {webkit, chromium, firefox} from '@playwright/test'

test('login', async() => {

    //open browser.
    const browser:Browser=await chromium.launch({headless:false})
    //open page.
    const page:Page=await browser.newPage()
    //open url.
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login")

    //enter email, password, click login.
    //used css locators.
    const emailId:Locator=await page.locator("#input-email")
    const passwordText:Locator=await page.locator("#input-password")
    const loginButton:Locator=await page.locator("[value='Login']")

    //enter the credentials.
    //click login.
    await emailId.fill("pwtest@opencart.com")
    await passwordText.fill("playwright@123")
    await loginButton.click()

    //wait for page title.
    const title=await page.title()
    console.log(`home page title is ${title}`)

    //take screenshot and give path where to save.
    //it will be saved in root directory of project.
    await page.screenshot({path:'homepage.png'})

    //asset title.
    expect(title).toEqual('Account Login')

    //close browser.
    browser.close()
});