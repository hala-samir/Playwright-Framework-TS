import { test as base, expect as baseExpect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

// Declare the types of your fixtures.
type PageFixtures = {
  loginPage: LoginPage;
};

export const test = base.extend<PageFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});

export const expect = baseExpect;