import {test, expect, Browser, Page, Locator, FrameLocator} from '@playwright/test'
import { log } from 'console';
import { webkit, chromium, firefox } from 'playwright'

test('drag and drop ', async()=>{

   const browser:Browser =  await chromium.launch({headless: false, channel: 'chrome'});
   const page:Page = await browser.newPage();

   //go to url.
   await page.goto("https://jqueryui.com/resources/demos/droppable/default.html");

   //one liner code.
    //single:
    //source locator from where to drag.
   //drag to method to be used.
   //destination locator where to drop.
   await page.locator("#draggable").dragTo(page.locator("#droppable"));

   await page.waitForTimeout(3000)

})