import { test, expect } from '@playwright/test';

test.describe('Google Search Tests', () => {

  test('Homepage should load successfully @smoke', async ({ page }) => {
    await page.goto('https://www.google.com');
    await expect(page).toHaveTitle(/Google/);
  });

  test('Search box should be visible @regression', async ({ page }) => {
    await page.goto('https://www.google.com');
    const searchBox = page.locator('textarea[name="q"]');
    await expect(searchBox).toBeVisible();
  });

  test('Should show results after searching a keyword @smoke', async ({ page }) => {
    await page.goto('https://www.google.com');
    const searchBox = page.locator('textarea[name="q"]');
    await searchBox.fill('Playwright');
    await searchBox.press('Enter');
  });

  //fail one test for dot reporter.
   test('Shoulda_1 show results after searching a keyword @smoke', async ({ page }) => {
    await page.goto('https://www.google.com');
    const searchBox = page.locator('textarea[naewrerme="q"]');
    await searchBox.fill('Playwright');
    await searchBox.press('Enter');
  });

});
