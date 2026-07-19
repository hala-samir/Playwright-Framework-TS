import {Page, Locator} from '@playwright/test';
import { BasePage } from './basePage';
export class LoginPage extends BasePage{
    private emailInput: Locator;
    private passwordInput: Locator;
    private loginButton: Locator

    constructor(page: Page){
        super(page);
        this.emailInput = page.locator('#userEmail');
        this.passwordInput = page.locator('#userPassword');
        this.loginButton = page.locator('#login');
    }

    async login(email: string, password: string){
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}  
