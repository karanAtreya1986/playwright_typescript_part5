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
  //we cannot pass class attribute in this way.
  //we get error Unknown engine "class" while parsing selector class=img-responsive
  const logo:Locator=await page.locator("class=img-responsive")
  const logoexist=await logo.isEnabled()
  console.log(logoexist)
});