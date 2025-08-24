import {test, expect, Browser, Page, Locator, FrameLocator} from '@playwright/test'
import { log } from 'console';
import { webkit, chromium, firefox } from 'playwright'

test('move to element', async()=>{
   const browser:Browser =  await chromium.launch({headless: false, channel: 'chrome'});
   const page:Page = await browser.newPage();

   //open spicejet.
   await page.goto("https://www.spicejet.com/");

   //move mouse over the adds on field.
   //get the field and then move the mouse over it.
   //if there are multiple add ons, so we used first to click on the first.
   await page.getByText('Add-ons').first().hover();


    await page.waitForTimeout(15000);

});