import { expect, test } from "../../fixtures/fixtures"
import config from "../../utils/config";
test.describe('Add To Cart', () => {

  test('user can filter the products', async ({ loginPage, sharedActions, dashboardPage }) => { });


  test('user can product to cart', async ({ loginPage, dashboardPage, baseURL }) => {
    await loginPage.navigateTo(`${baseURL}/client/#/auth/login`);
    const email = (process.env.EMAIL ?? process.env.email) as string;
    const password = (process.env.PASSWORD ?? process.env.password) as string;
    await loginPage.login(email, password);
    await dashboardPage.searchProducts("ADIDAS ORIGINAL");


  });

  test('user can product to cart via API login', async ({ loginPage, sharedActions, dashboardPage }) => {
    //  await config({ loginPage });
    //await dashboardPage.searchProducts("ADIDAS ORIGINAL");

  });

});