// Test web  http://zero.webappsecurity.com/index.html
const puppeteer = require('puppeteer');

// Test function basic
describe('Example Test', () => {
    it('should launch the browser', async () => {
        //headless : show browser or not
        //slowMo : slow down the browser
        const browser = await puppeteer.launch({ headless: false, devtools: false});
        const page = await browser.newPage();
        await page.goto('http://zero.webappsecurity.com/index.html');
        await page.waitForSelector('#signin_button');
        await page.click('#signin_button');
        await page.waitForFunction(() => !document.querySelector('#signin_button')); //Phương thức waitForFunction sẽ chờ cho đến khi function bạn truyền vào trả về true. Trong trường hợp của bạn, nó sẽ chờ cho đến khi element với id signin_button không còn xuất hiện trên trang.
        await page.waitForSelector('#signin_button', {hidden: true, timeout: 3000}); // Chờ cho element không còn xuất hiện
        await browser.close();
    }
)});
