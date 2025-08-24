import{test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'
import {webkit, chromium, firefox} from '@playwright/test'

test('locator test', async() => {
    
   const browser:Browser= await chromium.launch({headless:true, channel:'chrome'})
  const page:Page=await browser.newPage()

  await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register")

  //three step strategy in pw and cypress.
  //create webelement using locator.
  //then perform action.
  //then assert.

  //using id.
  //html will contain id attribute for the element.
  //first name field.
  const fname:Locator=await page.locator('id=input-firstname')
  //last name field.
  const lname:Locator=await page.locator('id=input-lastname')

  //when the await is not used.
  //it says browser closed before entering anything.
  fname.fill('tiger')
  lname.fill('karan labs')
});