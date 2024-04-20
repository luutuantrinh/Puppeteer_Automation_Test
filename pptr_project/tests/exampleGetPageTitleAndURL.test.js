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
        const title = await page.title();
        const url = await page.url();

        console.log('Title: ' + title);
        console.log('URL: ' + url);
        console.log('---------------------------------------Hello World');
        await new Promise(resolve => setTimeout(resolve, 10000));
        await browser.close();
}
)});