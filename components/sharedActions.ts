import { Page, Locator } from "@playwright/test";
import { BasePage } from "../pages/basePage"; 

export class SharedActions extends BasePage{
    private signOutButton: Locator;
    private productsLink: Locator;
    private ordersLink: Locator;
    
    constructor(page: Page){
        super(page);
        this.signOutButton = page.getByRole("button", {name:" Sign Out "});
        this.productsLink = page.locator(".card-body");
        this.ordersLink = page.getByRole("link", {name:"Orders"});
    }

    async clickSignOut(){
        await this.signOutButton.click();
    }

    async isSignOutActionVisible(): Promise<boolean>{
       return await this.isElementVisible(this.signOutButton);
    }

    async clickProductsLink(){
        await this.productsLink.first().click();
    }

    async clickOrdersLink(){
        await this.ordersLink.click();
    }
} 