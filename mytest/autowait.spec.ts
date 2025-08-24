import {test, expect, Browser, Page, Locator, FrameLocator} from '@playwright/test'
import { log} from 'console';
import path from 'path';
import { webkit, chromium, firefox } from 'playwright'

test('auto wait checks ', async()=>{
    const browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});
    const page: Page = await browser.newPage();
    
    await page.goto("https://classic.freecrm.com/register/");

    //wait for the locator and click on checkbox of i agree.
     await page.locator('input[name="agreeTerms"]').check();
     
});
