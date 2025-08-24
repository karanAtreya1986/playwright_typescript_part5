import {test, expect, Browser, Page, Locator, FrameLocator} from '@playwright/test'
import { log} from 'console';
import path from 'path';
import { webkit, chromium, firefox } from 'playwright'

//set the timeout at global level for all actions.
//so all test in this file will have the timeout.
//this timeout is not for other classes.
//this timeout is for this file only.
test.use({
    actionTimeout: 5000});

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
