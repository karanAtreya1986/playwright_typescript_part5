import{test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'
import {webkit, chromium, firefox} from 'playwright'

test('auth test', async() => {
    
    const browser:Browser=await chromium.launch({headless: false, channel: 'chrome'})
    const context:BrowserContext=await browser.newContext()
    const page:Page=await context.newPage()

    //remove user name and password and we get error.
    await page.goto("https://the-internet.herokuapp.com/basic_auth")
});