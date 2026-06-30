const { test, expect } = require('@playwright/test');

test('Verify successful user login', async ({ page }) => {
  // 1. Arrange: Navigate to the practice login page
  await page.goto('https://the-internet.herokuapp.com/login');

  // 2. Act: Fill in credentials using case-insensitive regex matching
  await page.getByLabel(/username/i).fill('tomsmith');
  await page.getByLabel(/password/i).fill('SuperSecretPassword!');
  
  // Click the login button using its role
  await page.getByRole('button', { name: /login/i }).click();

  // 3. Assert: Verify the success alert banner is visible
  const successAlert = page.locator('#flash');
  await expect(successAlert).toContainText('You logged into a secure area!');
});