const puppeteer = require('puppeteer');

// Test function basic
describe('Example Test', () => {
    it('should launch the browser', async () => {
        //headless : show browser or not
        //slowMo : slow down the browser
          const browser = await puppeteer.launch({ headless: false, slowMo: 1000, devtools: true});
          const page = await browser.newPage();
          await page.goto('https://example.com');
          // Wait for 1 second --> Set thời gian timeout cho browser
        await new Promise(resolve => setTimeout(resolve, 1000));
          //await page.waitForSelector('h1');
          await browser.close();
      }
)});



