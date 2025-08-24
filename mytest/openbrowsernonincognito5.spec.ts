import { test, expect, Browser, Page, Locator, FrameLocator, BrowserContext } from '@playwright/test';
import { log } from 'console';
import { channel } from 'diagnostics_channel';
import { webkit, chromium, firefox } from 'playwright';

test('No Incognito test', async () => {

 //store the session at our project level.
  const browser: BrowserContext = await webkit.launchPersistentContext('./sessions/', 
    { headless: false});

    //pages method returns all open pages.
    //returns Page[]
    const pages:Page[]=browser.pages()
    const page:Page=pages[0]!; //warning - Type 'undefined' is not assignable to type 'Page'.ts(2322)
    //though the test case passes but pw says what if undefined comes.
    //put an assertion stating that page[0] will not be undefined.
    //compile warning gone.

  await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

  //enter first name and last name.
  await page.locator('#input-firstname').fill('naveen');
  await page.locator('#input-lastname').fill('Automation Labs');

  await page.waitForTimeout(10000)
});
