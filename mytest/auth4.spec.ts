import{test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'
import {webkit, chromium, firefox} from 'playwright'

test('auth test', async() => {
    
    const browser:Browser=await chromium.launch({headless: false, channel: 'chrome'})
    const context:BrowserContext=await browser.newContext()
    const page:Page=await context.newPage()

    //encode the user name and password without hardcoding in url.
    //to avoid security issues.

    await page.goto("https://admin:admin@123@the-internet.herokuapp.com/basic_auth")
});