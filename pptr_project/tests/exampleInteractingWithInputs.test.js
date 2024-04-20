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
        await page.type('#developer-name', 'LuuTuanTrinh', {delay: 200}); // set dữ liệu thẳng vào trong field input trả kết quả test 
        await new Promise(resolve => setTimeout(resolve, 1000));
        await browser.close();
}
)});