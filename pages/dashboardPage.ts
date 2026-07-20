import {Page, Locator} from '@playwright/test';
import { BasePage } from './basePage';
export class DashboardPage extends BasePage{

    private productsNames: Locator;

    constructor(page: Page){
        super(page);
        this.productsNames = page.locator(".card-body b");
    }

    async searchProducts(productName: string){
        const titles = await this.getListOfText(this.productsNames);
        for (const title of titles) {
            if (title === productName) {
                const productCard = this.page.locator('.card-body').filter({ hasText: productName });
                await productCard.getByRole('button', { name: /add to cart/i }).click();
                break;
            } else {
                console.log(`Product ${productName} not found`);
            }
        }
    }

}