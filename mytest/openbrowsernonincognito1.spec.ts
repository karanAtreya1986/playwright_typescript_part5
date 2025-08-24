import { test, expect, Browser, Page, Locator, FrameLocator, BrowserContext } from '@playwright/test';
import { log } from 'console';
import { channel } from 'diagnostics_channel';
import { webkit, chromium, firefox } from 'playwright';

test('No Incognito test', async () => {

  // open the browser in incognito mode
  //launch persistent context is the option.
  //first parameter can be blank.
  //first parameter creates temporary directory at browser itself.
  const browser: BrowserContext = await chromium.launchPersistentContext('', 
    { headless: false, channel: 'chrome' });

  const page: Page = await browser.newPage();
  await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

  //enter first name and last name.
  await page.locator('#input-firstname').fill('naveen');
  await page.locator('#input-lastname').fill('Automation Labs');

  await page.waitForTimeout(10000)
});
