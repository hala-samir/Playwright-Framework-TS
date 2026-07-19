import { test as base, expect as baseExpect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { SharedActions } from '../components/sharedActions';

// Declare the types of your fixtures.
type PageFixtures = {
  loginPage: LoginPage;
  sharedActions: SharedActions;
};

export const test = base.extend<PageFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  sharedActions: async({ page }, use)=> {
    await use(new  SharedActions(page));
  },
});

export const expect = baseExpect;