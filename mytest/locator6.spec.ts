import{test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'
import {webkit, chromium, firefox} from '@playwright/test'

test('locator test', async() => {
    
   const browser:Browser= await chromium.launch({headless:true, channel:'chrome'})
  const page:Page=await browser.newPage()

  //go to the register page.
  await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register")

  //three step strategy in pw and cypress.
  //create webelement using locator.
  //then perform action.
  //then assert.

  //text attribute. 
 //we capture using the visible text on browser.
 //check register account seen.
 const header:Locator=await page.locator('text=Register Account')
 const headerenabled=await header.isEnabled()
 console.log(headerenabled)


 //text works on any visible element including buttons, links etc.

 //check continue button seen.
 const continuebutton:Locator=await page.locator('text=Continue')
 const conitnueisenabled=await continuebutton.isEnabled()
 console.log(conitnueisenabled)

  //check forgotten password link seen.
 const forgotpasswordlink:Locator=await page.locator('text=Forgotten Password')
 const forgotPasswordEnabled=await forgotpasswordlink.isEnabled()
 console.log(forgotPasswordEnabled)
});