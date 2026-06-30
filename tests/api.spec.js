// tests/api.spec.js
const { test, expect } = require('@playwright/test');

test('Verify GET request for public post data', async ({ request }) => {
  // 1. Act: Send a GET request to JSONPlaceholder
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
  
  // 2. Assert: Verify the HTTP status code is 200 (OK)
  expect(response.status()).toBe(200);
  
  // 3. Extract and parse the JSON response body
  const responseBody = await response.json();
  
  // 4. Assert: Validate specific data payload properties
  expect(responseBody.id).toBe(1);
  expect(responseBody.userId).toBe(1);
});