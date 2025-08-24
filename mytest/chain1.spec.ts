import {test, expect, Browser, Page, Locator, FrameLocator} from '@playwright/test'
import { log } from 'console';
import { webkit, chromium, firefox } from 'playwright'

test('chaining locator test', async()=>{
   const browser:Browser =  await chromium.launch({headless: false, channel: 'chrome'});
   const page:Page = await browser.newPage();

    await page.goto("https://www.orangehrm.com/30-day-free-trial/");

    //enter the full name using >> chaining concept.
    await page.locator('form#Form_getForm >> #Form_getForm_Name').fill('Naveen');

    //using this same form, we click on get your free trial button.
    await page.locator('form#Form_getForm >> text=Get Your Free Trial').click();

    await page.waitForTimeout(5000);


});