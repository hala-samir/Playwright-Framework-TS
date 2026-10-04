import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';
export class RegisterationPage extends BasePage {

    private firstNameField: Locator;
    private lastNameField: Locator;
    private email: Locator;
    private phone: Locator;
    private passwordField: Locator;
    private passwordConfirmation: Locator;
    private registerBtn: Locator;

    constructor(page: Page) {
        super(page);
        this.firstNameField = page.locator('#firstName');
        this.lastNameField = page.locator('#lastName');
        this.email = page.getByPlaceholder('email@example.com');
        this.phone = page.getByPlaceholder('enter your number');
        this.passwordField = page.locator('#userPassword');
        this.passwordConfirmation = page.locator('#confirmPassword');
        this.registerBtn = page.locator('.login-btn');
    }

    async register(firstName: string, lastName: string, email: string, phone: string, password: string) {
        await this.firstNameField.fill(firstName);
        await this.lastNameField.fill(lastName);
        await this.email.fill(email);
        await this.phone.fill(phone);
        await this.passwordField.fill(password);
        await this.passwordConfirmation.fill(password);
        await this.registerBtn.click();
    }

}