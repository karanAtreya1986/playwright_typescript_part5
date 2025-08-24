import {test, expect, Browser, Page, Locator, FrameLocator} from '@playwright/test'
import { log } from 'console';
import { webkit, chromium, firefox } from 'playwright'

test('mouse click events', async()=>{
   const browser:Browser =  await chromium.launch({headless: false, channel: 'chrome'});
   const page:Page = await browser.newPage();

  
    //mouse hover.
    //mouse hover:
    await page.goto("https://www.spicejet.com/");

    //grab the first add on and hover over it.
    await page.getByText('Add-ons').first().hover();

    //grab visa services (first one) and click on it.
    await  page.getByText('Visa Services').first().click();
    await page.waitForTimeout(3000);

     browser.close();

})