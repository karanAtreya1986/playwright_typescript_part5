import {test, expect, Browser, Page, Locator, FrameLocator} from '@playwright/test'
import { log } from 'console';
import { webkit, chromium, firefox } from 'playwright'

test('drag and drop ', async()=>{

   const browser:Browser =  await chromium.launch({headless: false, channel: 'chrome'});
   const page:Page = await browser.newPage();

   //go to url.
   await page.goto("https://jqueryui.com/resources/demos/droppable/default.html");

  //multiple commands:
  //manual steps.

  //first hover over the source element.
    await page.locator("#draggable").hover();

    //then press the mouse button down.
    await page.mouse.down();

    //then hover over the destination element.
    await page.locator("#droppable").hover();

    //then release the mouse button.
    await page.mouse.up();

   await page.waitForTimeout(3000)

})