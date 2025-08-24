import { test, expect, Browser, Page, Locator, BrowserContext } from '@playwright/test'
import { webkit, chromium, firefox } from 'playwright'

test('aria role test', async() => {

    const browser:Browser=await chromium.launch({headless:false, channel:'chrome'})
    const page:Page=await browser.newPage();

    //goto page.
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register')

    //verify heading using aria.
    await expect(page.getByRole('heading', {name:'Register Account'})).toBeVisible()

    //verify forgot password using aria.
    await expect(page.getByRole('link', {name:'Forgotten Password'})).toBeVisible()

    //click on yes radio button using aria.
    //aria is case insensitive and space insensitive.
    await expect(page.getByRole('radio', {name: 'yes'})).toBeVisible()
    await expect(page.getByRole('radio', {name: 'yes'}).click()

    //checkbox has no name, but we will try using the name from name attribute.
    //we get error and the locator not identified.
    await expect(page.getByRole('checkbox', {name: 'agree'})).toBeVisible();
    await page.getByRole('checkbox').click();

    await page.waitForTimeout(3000);
    
});

// Error: expect(locator).toBeVisible() failed


// Locator:  getByRole('checkbox', { name: 'agree' })
// Expected: visible
// Received: <element(s) not found>
// Timeout:  5000ms

// Call log:
//   - Expect "toBeVisible" with timeout 5000ms
//   - waiting for getByRole('checkbox', { name: 'agree' })

//     at mytest\aria1.spec.ts:22:62
