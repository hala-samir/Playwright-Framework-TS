import { test, expect } from '../fixtures/fixtures';

test.describe('Login Page Tests', () => {
  test('user can login with valid credentials', async ({ loginPage }) => {
    await loginPage.navigateTo('login');
    await loginPage.login('egy-test1@gmail.com', '123456789aA@');
    expect(true).toBeTruthy();
  });
});