const puppeteer = require('puppeteer');
// Test  https://devexpress.github.io/testcafe/example/
describe('Example Test', () => {
    it('should launch the browser', async () => {
        const browser = await puppeteer.launch({ 
            headless: false, 
            //slowMo: 1000, 
            devtools: false});
        const page = await browser.newPage();
        await page.goto('https://devexpress.github.io/testcafe/example/');
        await page.type('#developer-name', 'LuuTuanTrinh', {delay: 200}); // set dữ liệu thẳng vào trong field input trả kết quả test
        await new Promise(resolve => setTimeout(resolve, 1000));
        await page.click('#tried-test-cafe', {delay: 900, clickCount:1}); // click vào checkbox
        await new Promise(resolve => setTimeout(resolve, 1000)); 
        await page.type('#comments', 'LuuTuanTrinhDeveloper', {delay: 200}); // set dữ liệu thẳng vào trong field input trả kết quả test
        await new Promise(resolve => setTimeout(resolve, 1000)); 
        await page.click('#submit-button', {delay: 900, clickCount:1}); // click vào button
        await new Promise(resolve => setTimeout(resolve, 3000));
        await page.waitForSelector('.result-content');
        await new Promise(resolve => setTimeout(resolve, 1000));
        await browser.close();
}
)});