import {test, expect, Browser, Page, Locator, FrameLocator} from '@playwright/test'
import { log} from 'console';
import path from 'path';
import { webkit, chromium, firefox } from 'playwright'

test('auto wait checks ', async()=>{
    const browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});
    const page: Page = await browser.newPage();

    //change default timeout from 30000 to 15000 ms.
    page.setDefaultTimeout(15000)
    
    await page.goto("https://classic.freecrm.com/register/");

    //give your own time out for specific action.
    //click i agree checkbox.
     await page.locator('input[name="agreeTerm1212"]').check({timeout:5000});
     
});
