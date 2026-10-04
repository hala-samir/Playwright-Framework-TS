import { from } from "node:stream/iter";
import { Page, Request } from "@playwright/test"
import { test } from "../../fixtures/fixtures";

test.describe('Login Page Tests', () => {
    test('user can login with valid credentials', async ({ request, page }) => {
        const response = await request.post('/api/ecom/auth/login', {
            data:
            {
                userEmail: "egy-test1@gmail.com",
                userPassword: "123456789aA@"
            }
        });
        const responseBody = await response.json();
        const token = responseBody.token;
        console.log(token);

    });
});

