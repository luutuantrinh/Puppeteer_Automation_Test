const puppeteer = require('puppeteer');
// Test  https://devexpress.github.io/testcafe/example/
describe('Example Test', () => {
    it('should launch the browser', async () => {
        const browser = await puppeteer.launch({ 
            headless: false, 
            //slowMo: 1000, 
            devtools: true});
        const page = await browser.newPage();
        await page.goto('https://devexpress.github.io/testcafe/example/');
        await page.select('#preferred-interface', 'JavaScript API'); // chọn giá trị trong dropdown
        await new Promise(resolve => setTimeout(resolve, 500)); 
        await browser.close();
}
)});