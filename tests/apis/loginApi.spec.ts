import { from } from "node:stream/iter";
import { Page, Request } from "@playwright/test"
import { test } from "../../fixtures/envTest";

test.describe('Login Page Tests', () => {
    test('user can login with valid credentials', async ({ request, apiBaseUrl }) => {
        const response = await request.post(`${apiBaseUrl}/api/ecom/auth/login`, {
            data:
            {
                userEmail: process.env.email,
                userPassword: process.env.password
            }
        });
        console.log(response);

    });
});

