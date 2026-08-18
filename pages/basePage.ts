import { type Locator, type Page } from "@playwright/test";

export class BasePage {
    constructor(public readonly page: Page) { }

    async navigateTo(url: string): Promise<void> {
        await this.page.goto(url, {waitUntil: 'domcontentloaded'});
    }

    async getPageTitle(): Promise<string> {
        return this.page.title();
    }

    async getUrl(): Promise<string> {
        this.waitForPageLoad();
        return this.page.url();
    }

    /**
     * Checks if an element is visible, optionally waiting for it.
     * Returns a boolean instead of throwing an error on timeout.
     */
    async isElementVisible(element: Locator, timeout?: number): Promise<boolean> {
        try {
            await element.waitFor({ state: 'visible', timeout });
            return true;
        } catch {
            return false;
        }
    }

    async waitForPageLoad(): Promise<void> {
        await this.page.waitForLoadState('domcontentloaded');
    }

    async waitForNetworkIdle(): Promise<void> {
        await this.page.waitForLoadState('networkidle');
    }

    async reloadPage(): Promise<void> {
        await this.page.reload();
    }

    async goBack(): Promise<void> {
        await this.page.goBack();
    }

    async goForward(): Promise<void> {
        await this.page.goForward();
    }

    /**
     * Checks if an element is hidden or detached, optionally waiting for it.
     * Returns a boolean instead of throwing an error on timeout.
     */
    async isElementHidden(element: Locator, timeout?: number): Promise<boolean> {
        try {
            await element.waitFor({ state: 'hidden', timeout });
            return true;
        } catch {
            return false;
        }
    }

    /**
     * Scrolls the element into view if it is not already visible.
     */
    async scrollToElement(element: Locator): Promise<void> {
        await element.scrollIntoViewIfNeeded();
    }

    async getListOfText(element: Locator) : Promise<string[]> {
        return await element.allTextContents() 
    }
}