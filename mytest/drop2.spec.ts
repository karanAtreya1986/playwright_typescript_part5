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

    //select by label.
    //label is the value which is actually displayed to user.
    await page.selectOption(countryDropDown, { label: 'Australia' });

    await page.waitForTimeout(15000);

});