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
          // Wait for 1 second --> Set thời gian timeout cho browser
        //await new Promise(resolve => setTimeout(resolve, 1000));
        await page.waitForSelector('#searchTerm');
        await page.type('#searchTerm', 'Hello World'); // Gõ text vào input
        await page.keyboard.press('Enter', {delay: 10}); // Ấn phím Enter với delay 10ms
        await new Promise(resolve => setTimeout(resolve, 3000));
        await browser.close();
    }
)});
