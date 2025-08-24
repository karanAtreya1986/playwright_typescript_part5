import {test, expect, Browser, Page, Locator, FrameLocator} from '@playwright/test'
import { log } from 'console';
import path from 'path';
import { webkit, chromium, firefox } from 'playwright'

test('Single File Upload ', async()=>{
   const browser:Browser =  await chromium.launch({headless: false, channel: 'chrome'});
   const page:Page = await browser.newPage();

  await page.goto("https://cgi-lib.berkeley.edu/ex/fup.html");

  //single upload:
  //grab the locator of the file upload.
  //set input files method, pass in path of file.
    await page.locator("input[name='upfile']").
    setInputFiles("C:/Users/karan/Desktop/logo.png");

    await page.waitForTimeout(3000)

})