import { Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class CustomLoginPage extends BasePage{
    private usernameField: Locator;
    private password: Locator;
    private userRadioButton: Locator;
    private userTypeDropDown: Locator;
    private termsCheckbox: Locator;
    private signinButton: Locator;
    private userConfirmationOK: Locator;
    private blinkingLink: Locator;

    constructor(page: Page){
        super(page);
        this.usernameField = page.locator('#username');
        this.password =page.locator('#password');
        this.userRadioButton = page.locator('.customradio');
        this.userTypeDropDown = page.locator('.form-group select');
        this.termsCheckbox = page.getByRole("checkbox", {name: 'terms'});
        this.signinButton= page.locator('#signInBtn');
        this.userConfirmationOK = page.locator('#okayBtn');
        this.blinkingLink=page.locator('.blinkingText');
    }

    async fillCredientials(username: string, password: string){
        await this.usernameField.fill(username);
        await this.password.fill(password);
    }

    async clickSignInBtn(){
        await this.signinButton.click();
    }

    async selectUserType(){
        await this.userRadioButton.last().click();
        await this.userConfirmationOK.click();
    }

    async acceptTerms(){
        await this.termsCheckbox.click();
    }

    async selectUserTypeFromComboBox(optionName: string){
        await this.userTypeDropDown.selectOption(optionName);
    }

    async clickBlinkingLink(){
        await this.blinkingLink.first().click();
    }
}