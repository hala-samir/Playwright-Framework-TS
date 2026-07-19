import { Page, Locator } from "@playwright/test";
import { BasePage } from "../pages/basePage"; 

export class SharedActions extends BasePage{
    private signOutButton: Locator;
    
    constructor(page: Page){
        super(page);
        this.signOutButton = page.getByRole("button", {name:" Sign Out "});
    }

    async clickSignOut(){
        await this.signOutButton.click();
    }

    async isSignOutActionVisible(): Promise<boolean>{
       return await this.isElementVisible(this.signOutButton);
    }
} 