import {test, expect, Browser, Page, Locator, FrameLocator} from '@playwright/test'
import { log } from 'console';
import { webkit, chromium, firefox } from 'playwright'

test('mouse click events', async()=>{
   const browser:Browser =  await chromium.launch({headless: false, channel: 'chrome'});
   const page:Page = await browser.newPage();

  
    //shift + click:
    //go to the url.
    await page.goto('https://the-internet.herokuapp.com/shifting_content');

    //grab the element and perform shift click.
    await page.getByText('Example 1: Menu Element').click({ modifiers: ["Shift"] });
    await page.waitForTimeout(3000);

     browser.close();

})