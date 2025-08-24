import {test, expect, Browser, Page, Locator, FrameLocator} from '@playwright/test'
import { log } from 'console';
import path from 'path';
import { webkit, chromium, firefox } from 'playwright'

test('multiple File Upload ', async()=>{
   const browser:Browser =  await chromium.launch({headless: false, channel: 'chrome'});
   const page:Page = await browser.newPage();

   await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");

   //multiple files:
   //grab the locator of file upload.
   //set input files method.
   //pass in multiple files, give full path.
   //use path.join method.
    await page.locator("input[name='filesToUpload']")
        .setInputFiles([
            path.join("C:/Users/karan/Desktop/logo.png"),
            path.join("D:/pramodpython/Links.txt"),
            path.join("C:/Users/karan/Desktop/Karan_Atreya_13years_Automation_Engineer.docx")]);

    await page.waitForTimeout(4000);

        })