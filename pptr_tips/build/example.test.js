'use strict';

var puppeteer = require('puppeteer'); // Puppeteer: thư viện test headless browser

describe('Load URL', function () {
    var browser = void 0;
    var page = void 0;
    before(async function () {
        browser = await puppeteer.launch({
            headless: false,
            devtools: false
            //slowMo: 500,
        });
        page = await browser.newPage();
        await page.setDefaultTimeout(10000);
        await page.setDefaultNavigationTimeout(20000);
    });

    after(async function () {
        await browser.close();
    });

    it('should launch the browser', async function () {
        await page.goto('http://zero.webappsecurity.com/index.html');
        await page.waitForSelector('#signin_button'); // Chờ cho element xuất hiện
        await page.click('#signin_button');
        await page.waitForFunction(function () {
            return !document.querySelector('#signin_button');
        }); //Phương thức waitForFunction sẽ chờ cho đến khi function bạn truyền vào trả về true. Trong trường hợp của bạn, nó sẽ chờ cho đến khi element với id signin_button không còn xuất hiện trên trang.
        await page.waitForSelector('#signin_button', { hidden: true }); // Chờ cho element không còn xuất hiện
        //await browser.close();
        console.log('---------------------------------------should launch the browser');
    });
});