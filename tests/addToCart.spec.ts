import { expect, test } from "../fixtures/fixtures"
test.describe('Add To Cart', () => {

  test('user can product to cart', async ({ loginPage, sharedActions,dashboardPage }) => {
    await loginPage.navigateTo('login');
    await loginPage.login('egy-test1@gmail.com', '123456789aA@');
    await dashboardPage.searchProducts("ADIDAS ORIGINAL");

    
  });
  
});