import {test, expect, Browser, Page, Locator, FrameLocator} from '@playwright/test'
import { log } from 'console';
import { webkit, chromium, firefox } from 'playwright'

test('chaining locator test', async()=>{
   const browser:Browser =  await chromium.launch({headless: false, channel: 'chrome'});
   const page:Page = await browser.newPage();

    await page.goto("https://www.orangehrm.com/30-day-free-trial/");

    //we want to only click on get your free trial button.

    //another way to chain without >>
    //get the parent or outer element.
    const form = page.locator('form#Form_getForm');

    //this button is inside the parent element.
    const getYourFreeTrButton = page.getByRole('button', { name: 'Get Your Free Trial' });

    //use the outer locator then use .locator and pass in inner locator.
    //then perform operation.
     await form.locator(getYourFreeTrButton).click();

    await page.waitForTimeout(10000);


});