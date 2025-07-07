import { test, expect } from '@playwright/test';

test.describe('login page and check filds', () => {
    test('Should Login', async ({page}) => {

      // Go to local URL
      await page.goto('http://localhost:5173/login');

      // Fill in Email field
      await page.getByLabel('email').fill('playwright@gmail.com');
      
      // Fill in Password field
      await page.getByLabel('Password').fill('12345678');

      // Expect to click the Sign in button
      await page.getByRole('button', {name: 'Sign in'}).click();

      // Expect the URL to have /profile
      await expect(page).toHaveURL(/\/profile/);

      // Expect to see a logout button
      await expect(page.getByRole('button', { name: 'Logout' })).toBeVisible();

      await page.waitForTimeout(500)

      await expect(page.locator('input[placeholder="Name"]')).toBeVisible();


    });

  

});