import { test, expect } from '../../fixtures/fixtures';

test.describe('Login Page Tests', () => {

  test('user can login with valid credentials', async ({ loginPage, sharedActions }) => {
    await loginPage.navigateTo('login');
    await loginPage.login('egy-test1@gmail.com', '123456789aA@');
    expect(await sharedActions.isSignOutActionVisible()).toBeTruthy();
  });
  test('user can not login with invalid credentials', async ({ }) => {

  });

  test('validation message appears in case of empty credientials', async ({ }) => { });
});