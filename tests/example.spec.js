// tests/example.spec.js
const { test, expect } = require('@playwright/test');
// Import the LoginPage class we built earlier
const { LoginPage } = require('../pages/LoginPage');

test('Verify successful user login using Page Object Model', async ({ page }) => {
  // Initialize the login page object
  const loginPage = new LoginPage(page);

  // 1. Arrange: Navigate to the site using the page class method
  await loginPage.navigate();

  // 2. Act: Perform the login sequence using the encapsulated class method
  await loginPage.login('tomsmith', 'SuperSecretPassword!');

  // 3. Assert: Verify the outcome
  const successAlert = page.locator('#flash');
  await expect(successAlert).toContainText('You logged into a secure area!');
});