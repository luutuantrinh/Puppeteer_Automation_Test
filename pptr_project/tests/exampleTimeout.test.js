const puppeteer = require('puppeteer');
// Test set time out 
describe('Example Test', () => {
    it('should launch the browser', async () => {
        const browser = await puppeteer.launch({ 
            headless: false, 
            // slowMo: 1000, 
            devtools: true});
        const page = await browser.newPage();
        await page.goto('https://example.com');
        await page.waitForSelector('h1');
        await new Promise(resolve => setTimeout(resolve, 3000));
        await page.waitForSelector('h1');
        await page.reload();
        await new Promise(resolve => setTimeout(resolve, 3000));
        await page.waitForSelector('h1');
        await browser.close();
}
)});