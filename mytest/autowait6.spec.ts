import {test, expect, Browser, Page, Locator, FrameLocator} from '@playwright/test'
import { log} from 'console';
import path from 'path';
import { webkit, chromium, firefox } from 'playwright'

//here the global timeout of 30000 ms is applied not the one we set.

test('auto wait checks 1 ', async()=>{
    const browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});
    const page: Page = await browser.newPage();
    
    await page.goto("https://classic.freecrm.com/register/");

    //click i agree checkbox.
     await page.locator('input[name="agreeTerm1212"]').check();
     
});

test('auto wait checks 2 ', async()=>{
    const browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});
    const page: Page = await browser.newPage();
    
    await page.goto("https://classic.freecrm.com/register/");

    //click i agree checkbox.
     await page.locator('input[name="agreeTerm1212"]').check();
     
});

test('auto wait checks 3 ', async()=>{
    const browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});
    const page: Page = await browser.newPage();
    
    await page.goto("https://classic.freecrm.com/register/");

    //click i agree checkbox.
     await page.locator('input[name="agreeTerm1212"]').check();
     
});
