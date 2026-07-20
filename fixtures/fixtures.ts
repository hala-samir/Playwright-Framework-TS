import { test as base, expect as baseExpect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { SharedActions } from '../components/sharedActions';
import { DashboardPage } from '../pages/dashboardPage'; 
import { utimesSync } from 'fs';

// Declare the types of your fixtures.
type PageFixtures = {
  loginPage: LoginPage;
  sharedActions: SharedActions;
  dashboardPage: DashboardPage;

};

export const test = base.extend<PageFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  sharedActions: async({ page }, use)=> {
    await use(new  SharedActions(page));
  },
  dashboardPage: async({ page }, use)=>{
    await use(new DashboardPage(page));
  },
});

export const expect = baseExpect;