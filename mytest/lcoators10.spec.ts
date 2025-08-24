import { test, expect, Browser, Page, Locator, BrowserContext } from '@playwright/test'
import { webkit, chromium, firefox } from '@playwright/test'

test('locator test', async () => {

    const browser: Browser = await chromium.launch({ headless: true, channel: 'chrome' })
    const page: Page = await browser.newPage()

    //go to the register page.
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register")

    //three step strategy in pw and cypress.
    //create webelement using locator.
    //then perform action.
    //then assert.

    //xpath.
    //write xpath word.
    //then normal like selenium.

    //for password field.
    //without xpath word also it works.
    const password:Locator=await page.locator('//input[@id="input-password"]')

    //for search text box.
    const search:Locator=await page.locator('//input[@name="search" and @type="text"]')

    //fill password and search something.
    await password.fill("23423@#$#@")
    await search.fill("macbook")
});