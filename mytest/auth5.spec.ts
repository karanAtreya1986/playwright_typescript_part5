import{test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'
import {webkit, chromium, firefox} from 'playwright'

test('auth test', async() => {
    
    const browser:Browser=await chromium.launch({headless: false, channel: 'chrome'})
    const context:BrowserContext=await browser.newContext()
    const page:Page=await context.newPage()

   const username ='admin'
   const password='admin'
   page.setExtraHTTPHeaders({Authorization:createauthusernamepassword(username, password)})
    await page.goto("https://the-internet.herokuapp.com/basic_auth")
}); 


//create generic function to encode.
function createauthusernamepassword(username:any, password:any){
    return 'Basic '+btoa(username+':'+password)
}