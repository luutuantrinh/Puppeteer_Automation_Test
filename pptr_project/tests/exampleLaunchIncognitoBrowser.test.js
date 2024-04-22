const puppeteer = require('puppeteer');
const devices = puppeteer.devices;

describe('Device Emulation Test', () => {
    let browser;
    let page;

    before(async function () {
        browser = await puppeteer.launch({  
            args: ['--incognito',
            '--no-sandbox'],
            headless: false, 
            devtools: true,
            slowMo: 500,
        });
        page = await browser.newPage();
        //await page.goto('https://example.com/');
        await page.setDefaultTimeout(10000);
        await page.setDefaultNavigationTimeout(20000);
    });

    after(async function () {
        await browser.close();
    });

    it('Desktop device test', async () => {
        await page.setViewport({ width: 1650, height: 1050 }); // Set kích thước màn hình
        await page.goto('https://example.com/');
       // await page.setDefaultTimeout(5000); // Set timeout cho page;
    });

});