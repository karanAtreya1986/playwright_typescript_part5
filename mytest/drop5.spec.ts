import {test, expect, Browser, Page, Locator, FrameLocator} from '@playwright/test'
import { log } from 'console';
import { webkit, chromium, firefox } from 'playwright'

test('Select based Drop Down test', async()=>{
   const browser:Browser =  await chromium.launch({headless: false, channel: 'chrome'});
   const page:Page = await browser.newPage();

   //goto page.
    await page.goto("https://www.magupdate.co.uk/magazine-subscription/phrr");

    //get the locator of select drop down first.
    const countryDropDown = 'select#Contact_CountryCode';

   //print all options.
   //get the locator first of the options.
   //options contains all values.
   //select#Contact_CountryCode > option

   const allOptions = await page.$$(countryDropDown + ' > option');
    console.log(allOptions.length);

    //iterate over all options and print the values.
    for (const e of allOptions) {
        const text = await e.textContent();
        console.log(text);
    }


    await page.waitForTimeout(15000);

});