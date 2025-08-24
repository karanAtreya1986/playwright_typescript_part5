import { test, expect, Browser, Page, Locator, BrowserContext } from '@playwright/test'
import { webkit, chromium, firefox } from 'playwright'

test('Aria Role locator test', async () => {
    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const page: Page = await browser.newPage();

    //go to the page.
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    //verify heading using aria.
    await expect(page.getByRole('heading', { name: 'Register Account' })).toBeVisible();

    //verify forgot password using aria.
    await expect(page.getByRole('link', { name: 'Forgotten Password' })).toBeVisible();

    //click on yes radio button using aria.
    await expect(page.getByRole('radio', { name: 'Yes' })).toBeVisible();
    await page.getByRole('radio', { name: 'Yes' }).click();

   //if there is no name and only one checkbox.
   //then second parameter name is not mandatory.
   await expect(page.getByRole('checkbox')).toBeVisible();
   await page.getByRole('checkbox').click()

  //verify continue button using aria.
  //click on it.
  await expect(page.getByRole('button', {name:'Continue'})).toBeVisible();
  await page.getByRole('button', {name:'Continue'}).click();

  await page.waitForTimeout(3000)
});


