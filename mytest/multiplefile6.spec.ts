import {test, expect, Browser, Page, Locator, FrameLocator} from '@playwright/test'
import { log } from 'console';
import path from 'path';
import { webkit, chromium, firefox } from 'playwright'

test('multiple File Upload ', async()=>{
   const browser:Browser =  await chromium.launch({headless: false, channel: 'chrome'});
   const page:Page = await browser.newPage();

   await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");

   //create multiple files on fly.
//grab the locator of file chooser.
//set input files method.
//name of file with extention.
//mime type.
//buffer means what to write inside file.

    await page.locator("input[name='filesToUpload']").setInputFiles([
      {
        name: 'karan_resume.txt',
        mimeType: 'text/plain',
        buffer: Buffer.from('this is karan resume')
      },
      {
        name: 'karan_resume.docx',
        mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        buffer: Buffer.from('this is karan resume in doc format')
      }

      ]);
    await page.waitForTimeout(14000);

        })