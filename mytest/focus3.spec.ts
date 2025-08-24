import {test, expect, Browser, Page, Locator, FrameLocator} from '@playwright/test'
import { log } from 'console';
import path from 'path';
import { webkit, chromium, firefox } from 'playwright'

test('Focus Element Test ', async()=>{
   const browser:Browser =  await chromium.launch({headless: false, channel: 'chrome'});
   const page:Page = await browser.newPage();

   //goto page.
    await page.goto("https://www.orangehrm.com/30-day-free-trial/");

    //accept cookies and bring focus on accept button.
    //if visible click else leave it.
    const acceptCookieButton=await page.getByText("Accept Cookies")
    if(await acceptCookieButton.isVisible()){
      await acceptCookieButton.focus()
      await acceptCookieButton.click()
    }
   //  await page.getByText("Accept Cookies").focus();
   //  await page.getByText("Accept Cookies").click();
    
    //get the locator for the full name field.
    const fullName = await page.locator("#Form_getForm_Name");

    //bring focus on it.
    await fullName.focus();

    //enter name after focus.
     await fullName.fill("testing automation");

     await page.waitForTimeout(10000);

});