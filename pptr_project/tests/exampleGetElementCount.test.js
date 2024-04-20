const puppeteer = require('puppeteer');
// Test  https://example.com/
describe('Example Test', () => {
    it('should launch the browser', async () => {
        const browser = await puppeteer.launch({ 
            headless: false, 
            //slowMo: 1000, 
            devtools: true});
        const page = await browser.newPage();
        await page.goto('https://example.com/');
        const count = await page.$$eval('p', element => element.length); // $$eval: đếm số lượng element
        console.log('Number of P tags: ' + count);
        await new Promise(resolve => setTimeout(resolve, 1000));
        await browser.close();
}
)});