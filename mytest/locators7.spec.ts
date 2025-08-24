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

    //css selectors.
    //use css at the start.
    //then normal like selenium.

    //for email field.
    const email: Locator = await page.locator('css=input#input-email')
    //for telephone field.
    const telephone: Locator = await page.locator('css=input[name="telephone"]')
    //for privacy checkbox field.
    const privacycheckbox: Locator = await page.locator('css=input[type="checkbox"]')

    //fill email.
    await email.fill("karan@test.com")
    await telephone.fill("3234")
    await privacycheckbox.click()
});