import { expect } from '../../fixtures/fixtures';
import { test } from '../../fixtures/envTest';

test.describe('Login Page Tests', () => {

  test.beforeEach(async ({ loginPage, uiBaseUrl }) => {
    await loginPage.navigateTo(`${uiBaseUrl}/client/#/auth/login`);
  });

  test('user can login with valid credentials', async ({ loginPage, sharedActions }) => {
    await loginPage.login(process.env.EMAIL as string, process.env.PASSWORD as string);
    expect(await sharedActions.isSignOutActionVisible()).toBeTruthy();
  });

  test('user can not login with invalid credentials', async ({ loginPage }) => {
    await loginPage.login('invalid@gmail.com', 'test1234567890');
    await expect(loginPage.toastMessage).toContainText('Incorrect email or password.');
  });

  test('validation message appears in case of empty credientials', async ({ loginPage }) => {
    await loginPage.clickLoginBtn();
    expect(await loginPage.getLoginValidationMsgs()).toEqual(expect.arrayContaining(['*Email is required', '*Password is required']));
  });
});