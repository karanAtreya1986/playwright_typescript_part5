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
    //then use get by role and try entering full name.
    //use the outer label which is present and check if the aria is able to identify.
    //it is able to identify the element.
     await page.locator('form#Form_getForm').getByRole('textbox', { name: 'Full Name' }).fill('karan');
     
    //then use get by role and click on get your free trial.
     await page.locator('form#Form_getForm').getByRole('button', { name: 'Get Your Free Trial' }).click();
    

    await page.waitForTimeout(10000);


});