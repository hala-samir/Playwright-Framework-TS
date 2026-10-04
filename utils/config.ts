
import { chromium } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";

async function config({ loginPage }: { loginPage: LoginPage }) {
    await loginPage.navigateTo('login');
    await loginPage.login('egy-test1@gmail.com', '123456789aA@');
    await loginPage.browserContext.storageState({ path: 'user.json' });
    console.log('storageState saved');


}
export default config;