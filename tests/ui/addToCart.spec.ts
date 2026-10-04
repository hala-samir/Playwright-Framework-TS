import { expect, test } from "../../fixtures/fixtures"
import config from "../../utils/config";
test.describe('Add To Cart', () => {

  test('user can filter the products', async ({ loginPage, sharedActions, dashboardPage }) => { });


  test('user can product to cart', async ({ loginPage, sharedActions, dashboardPage }) => {
    await loginPage.navigateTo('login');
    await loginPage.login('egy-test1@gmail.com', '123456789aA@');
    await dashboardPage.searchProducts("ADIDAS ORIGINAL");


  });

  test('user can product to cart via API login', async ({ loginPage, sharedActions, dashboardPage }) => {
    await config({ loginPage });
    await dashboardPage.searchProducts("ADIDAS ORIGINAL");


  });

});