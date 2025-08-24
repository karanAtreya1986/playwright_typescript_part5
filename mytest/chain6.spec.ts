import {test, expect, Browser, Page, Locator, FrameLocator} from '@playwright/test'
import { log } from 'console';
import { webkit, chromium, firefox } from 'playwright'

test('chaining locator test', async()=>{
   const browser:Browser =  await chromium.launch({headless: false, channel: 'chrome'});
   const page:Page = await browser.newPage();

    await page.goto("https://www.orangehrm.com/30-day-free-trial/");

    //we want to only click on get your free trial button.

    //combine multiple locators in one liner.
    //get the outer form first.
    //then get the inner one for the full name.
    //we cannot use get by role if there are multiple text box and we dont know name.

     await page.locator('form#Form_getForm').locator('#Form_getForm_Name').fill('karan');
     
    //then use get by role and click on get your free trial.
     await page.locator('form#Form_getForm').getByRole('button', { name: 'Get Your Free Trial' }).click();
    

    await page.waitForTimeout(10000);


});