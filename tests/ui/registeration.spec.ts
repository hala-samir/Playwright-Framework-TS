import { Page, Locator } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { expect } from "../../fixtures/fixtures"
import { test } from "../../fixtures/envTest"


test.describe("Registeration", () => {
    test("user can register for a new account", async ({ registerationPage, uiBaseUrl }) => {
        console.log(`${uiBaseUrl}/client/#/auth/register`);
        await registerationPage.navigateTo(`${uiBaseUrl}/client/#/auth/register`);
        await registerationPage.register(
            faker.person.firstName(),
            faker.person.lastName(),
            faker.internet.email(),
            faker.string.numeric(10),
            "Test1@" + faker.string.alphanumeric(8)
        );
        expect(await registerationPage.getSuccessMsg()).toContain('Account Created Successfully');
    })

});
