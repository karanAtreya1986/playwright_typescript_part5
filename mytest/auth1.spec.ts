import{test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'
import {webkit, chromium, firefox} from 'playwright'

test('auth test', async() => {
    
    const browser:Browser=await chromium.launch({headless: false, channel: 'chrome'})
    const context:BrowserContext=await browser.newContext()
    const page:Page=await context.newPage()

    //pass the user name and password followed by @.
    await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth")
});