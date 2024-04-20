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
        // await page.waitForXPath('//h1'); // Chờ cho element h1 xuất hiện --> Lỗi vì không còn hỗ trợ 
        //await page.waitForSelector('h1');
        await page.waitForSelector('xpath=//h1'); // Sử dụng phương pháp thay thế waitForXPath
        await new Promise(resolve => setTimeout(resolve, 3000));
        await page.waitForSelector('h1');
        await browser.close();
}
)});