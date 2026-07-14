import { expect, type Locator, type Page  } from "@playwright/test";

export class BasePage {
    protected page: Page;   

    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo(url: string) {
        try {
            await this.page.goto(url, { waitUntil: 'domcontentloaded' });
        } catch (error) {
            console.error(`Error navigating to URL: ${url}`);
            throw error;
        }
    }

    async getTitle() : Promise<string>{

        return await this.page.title();  
    }

    async isElementVisible(element: Locator): Promise<boolean>{
        await element.waitFor({ state: 'visible' });
        return await element.isVisible();
    }

    async clickElement(element: Locator){
        try{
            await element.waitFor({ state: 'visible' });
            await element.click();
        } catch (error) {
            console.error(`Error clicking element: ${error}`);
            throw error;
        }
    }

    async fillText(element: Locator, text:string){
        try{
        await element.waitFor({ state: 'visible' });
        await element.fill(text);}
        catch(error){
            console.error(`Error filling text in element: "${text}"`);
            throw error;
        }
    }

    async getElementText(element: Locator): Promise<string> {
        try {
            await element.waitFor({ state: 'visible' });
            const text = (await element.textContent())?.trim() ?? '';
            return text;
        } catch (error) {
            console.error(`Error getting text from element: ${error}`);
            throw error;
        }
    }

}