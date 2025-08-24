import { test, expect, type Browser, type Page, type Locator, BrowserContext } from '@playwright/test'
import { webkit, chromium, firefox } from 'playwright'

test('login', async () => {

    //Browser context always opens incognito mode.

    
    //open browser.
    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' })

    //create browser context1.
    //returns promise.
    const browsercontext_1:BrowserContext=await browser.newContext()
    //open page.
    const page1: Page = await browsercontext_1.newPage()

    //another browser context added.
    const browsercontext_2:BrowserContext=await browser.newContext()
    //open page.
    const page2: Page = await browsercontext_2.newPage()

    //for browser 1.
    //open url.
    await page1.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login")

    //enter email, password, click login.
    //used css locators.
    const emailId1: Locator = await page1.locator("#input-email")
    const passwordText1: Locator = await page1.locator("#input-password")
    const loginButton1: Locator = await page1.locator("[value='Login']")

    //enter the credentials.
    //click login.
    await emailId1.fill("userpw@pw.com")
    await passwordText1.fill("Test@123")
    await loginButton1.click()

    //for browser 2.
    //open url.
    await page2.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login")

    //enter email, password, click login.
    //used css locators.
    const emailId2: Locator = await page2.locator("#input-email")
    const passwordText2: Locator = await page2.locator("#input-password")
    const loginButton2: Locator = await page2.locator("[value='Login']")

    //enter the credentials.
    //click login.
    await emailId2.fill("karantest1@worker.com")
    await passwordText2.fill("1234567890")
    await loginButton2.click()


    //first close context then the browser.
    await browsercontext_1.close()
    await browsercontext_2.close()

    await browser.close()

    // await new Promise(()=>{}) //prevents script from exiting.

   
});