import { expect } from "../../fixtures/fixtures"
import { test } from "../../fixtures/envTest"

import { Locator } from "@playwright/test";

test.describe('Custom login test', () => {
    test('check the custom login', async ({ customLoginPage, uiBaseUrl }) => {
        await customLoginPage.navigateTo(`${uiBaseUrl}/loginpagePractise/`);
        await customLoginPage.fillCredientials('rahulshettyacademy', 'Learning@830$3mK2');
        await customLoginPage.acceptTerms();
        await customLoginPage.selectUserType();
        await customLoginPage.selectUserTypeFromComboBox('Consultant')
        await customLoginPage.clickSignInBtn();
        await expect(customLoginPage.page).toHaveURL(
            `${uiBaseUrl}/angularpractice/shop`
        );
    });

    test('check the blinking link opens a new tab', async ({ customLoginPage, context, uiBaseUrl }) => {
        await customLoginPage.navigateTo(`${uiBaseUrl}/loginpagePractise/`);
        const [newPage] = await Promise.all([
            context.waitForEvent('page'),
            customLoginPage.clickBlinkingLink()
        ]);

        await expect(newPage).toHaveURL(
            `${uiBaseUrl}/documents-request`
        );
        await newPage.waitForSelector('.red')
        console.log(await newPage.locator('.red').textContent());
        expect(await newPage.locator('.red').textContent()).toContain('Please email us at mentor@rahulshettyacademy.com with below template to receive response')

    });
});