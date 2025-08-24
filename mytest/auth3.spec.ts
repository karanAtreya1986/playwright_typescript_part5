import{test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'
import {webkit, chromium, firefox} from 'playwright'

test('auth test', async() => {
    
    const browser:Browser=await chromium.launch({headless: false, channel: 'chrome'})
    const context:BrowserContext=await browser.newContext()
    const page:Page=await context.newPage()

    //encode the user name and password without hardcoding in url.
    //to avoid security issues.

    const username='admin';
    const password='admin';
    //this is the btoa method which encodes.
    const authheader='Basic '+btoa(username+':'+password)
    //use this method to pass extra information when running.
    page.setExtraHTTPHeaders({Authorization:authheader})
    await page.goto("https://the-internet.herokuapp.com/basic_auth")
});