const puppeteer = require('puppeteer');

// Test Forward and Backward in Browser
describe('Example Test', () => {
    it('should launch the browser', async () => {
        const browser = await puppeteer.launch({ 
            headless: false, 
            slowMo: 250, 
            devtools: true});
        const page = await browser.newPage();
        await page.goto('https://example.com');
        await page.waitForSelector('h1');
        await page.goto('https://www.iana.org/help/example-domains');
        await page.waitForSelector('#body');
        await page.goBack();
        await page.waitForSelector('h1');
        await page.goForward();
        await browser.close();
}
)});