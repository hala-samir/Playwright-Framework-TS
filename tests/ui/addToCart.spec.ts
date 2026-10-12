import { expect, test } from "../../fixtures/fixtures"
import config from "../../utils/config";
test.describe('Add To Cart', () => {

  test('user can filter the products', async ({ loginPage, sharedActions, dashboardPage }) => { });


  test('user can product to cart', async ({ loginPage, dashboardPage, baseURL }) => {
    await loginPage.navigateTo(`${baseURL}/client/#/auth/login`);
    await loginPage.login(process.env.email as string, process.env.password as string);
    await dashboardPage.searchProducts("ADIDAS ORIGINAL");


  });

  test('user can product to cart via API login', async ({ loginPage, sharedActions, dashboardPage }) => {
    //  await config({ loginPage });
    //await dashboardPage.searchProducts("ADIDAS ORIGINAL");

  });

});