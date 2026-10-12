import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';
export class LoginPage extends BasePage {
    private emailInput: Locator;
    private passwordInput: Locator;
    private loginButton: Locator;
    readonly toastMessage: Locator;
    private validationMsgs: Locator;

    constructor(page: Page) {
        super(page);
        this.emailInput = page.locator('#userEmail');
        this.passwordInput = page.locator('#userPassword');
        this.loginButton = page.locator('#login');
        this.toastMessage = page.locator('#toast-container');
        this.validationMsgs = page.locator('.invalid-feedback');
    }

    async clickLoginBtn() {
        await this.loginButton.click();
    }

    async login(email: string, password: string) {
        if (!email || !password) {
            throw new Error(
                `LoginPage.login missing credentials: email=${String(email)}, password=${String(password)}. ` +
                `Provide non-empty strings (e.g. from process.env.EMAIL / process.env.PASSWORD) in CI.`
            );
        }
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.clickLoginBtn();
    }

    async getToastMessage(): Promise<string | null> {
        return await this.toastMessage.textContent();
    }

    async getLoginValidationMsgs(): Promise<string[]> {
        return await this.getListOfText(this.validationMsgs);
    }
}  
