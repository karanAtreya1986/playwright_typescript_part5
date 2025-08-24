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

  //class attribute. 
  //class name attribute is present.
  //check if the logo is enabled.
  const logo:Locator=await page.locator(".img-responsive")
  const logoexist=await logo.isEnabled()
  console.log(logoexist)
});