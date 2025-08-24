import {test, expect, Browser, Page, Locator, FrameLocator} from '@playwright/test'
import { log } from 'console';
import path from 'path';
import { webkit, chromium, firefox } from 'playwright'

test('multiple File Upload ', async()=>{
   const browser:Browser =  await chromium.launch({headless: false, channel: 'chrome'});
   const page:Page = await browser.newPage();

   await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");

   //single file can also be sent this way.
   //single file
   //use path.join method.
   //grab the locator of file upload.
   //set input files method.
   //pass in single file, give full path.
   //use path.join method.
            await page.locator("input[name='filesToUpload']")
            .setInputFiles([
                path.join("D:/pramodpython/Links.txt"),
                ]);

    await page.waitForTimeout(4000);

        })