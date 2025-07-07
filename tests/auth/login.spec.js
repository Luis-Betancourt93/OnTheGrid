import { test, expect } from '@playwright/test';



test.describe('login page', () => {
  test('Should have correct titles', async ({page}) => {
    await page.goto('http://localhost:5173/login');

  // Expect a title 'On the Grid'
  await expect(page).toHaveTitle("On The Grid");

  // Expect a Email Flied
  await expect(page.locator('input[type="email"]')).toBeVisible();

  // Expect a Password Flied 
  await expect(page.locator('input[type="password"]')).toBeVisible();

  // Expect a 'Register Here' Link
  await expect(page.getByRole('link', {name: 'Register Here'})).toBeVisible();

  });

  // Expect to go to 'Register Page'
  test('Should go to Register Page', async ({page}) => {

  // Expect to click on Register Link
  await page.goto('http://localhost:5173/login');

  // Click the link
  await page.getByRole('link', {name: 'Register Here'}).click();
   
  // Expect the URL to change to /register
  await expect(page).toHaveURL(/\/register/);

});
  

});

