import {test, expect, Browser, Page, Locator, FrameLocator} from '@playwright/test'
import { log } from 'console';
import path from 'path';
import { webkit, chromium, firefox } from 'playwright'

test('multiple File Upload ', async()=>{
   const browser:Browser =  await chromium.launch({headless: false, channel: 'chrome'});
   const page:Page = await browser.newPage();

   await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");

   await page.locator("input[name='filesToUpload']")
           .setInputFiles([
               path.join("C:/Users/karan/Desktop/logo.png")
           ])

               await page.waitForTimeout(4000);

               
    
               //deselect single files:
               //grab the locator of the file upload.
               //use set input files method.
               //pass in empty array.
    await page.locator("input[name='filesToUpload']").setInputFiles([]);

    await page.waitForTimeout(4000);

        })