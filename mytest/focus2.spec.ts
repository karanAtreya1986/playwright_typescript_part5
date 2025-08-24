import {test, expect, Browser, Page, Locator, FrameLocator} from '@playwright/test'
import { log } from 'console';
import path from 'path';
import { webkit, chromium, firefox } from 'playwright'

test('Focus Element Test ', async()=>{
   const browser:Browser =  await chromium.launch({headless: false, channel: 'chrome'});
   const page:Page = await browser.newPage();

   //goto page.
    await page.goto("https://www.orangehrm.com/30-day-free-trial/");
    
    //get the locator for the full name field.
    const fullName = await page.locator("#Form_getForm_Name");

    //bring focus on it.
    await fullName.focus();

    //enter name after focus.
     await fullName.fill("testing automation");

     await page.waitForTimeout(10000);

});