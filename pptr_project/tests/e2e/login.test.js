// Test web : http://zero.webappsecurity.com/index.html
const puppeteer = require('puppeteer');


const shouldNotExist = require('../../lib/helpers').shouldNotExist;

describe('Login Test', () => {
    let browser;
    let page;
    before(async function () {
        browser = await puppeteer.launch({ 
            headless: false, 
            devtools: false,
            //slowMo: 500,
        });
        page = await browser.newPage();
        await page.setDefaultTimeout(10000);
        await page.setDefaultNavigationTimeout(20000);
    });
    after(async function () {
        await browser.close();
    });
    it('Login Test - Invalid Credentials', async () => {
        await page.goto('http://zero.webappsecurity.com/index.html');
        await page.waitForSelector('#signin_button');
        await page.click('#signin_button');
        await page.waitForSelector('#login_form');
        await page.type('#user_login', 'invalid');
        await page.type('#user_password', 'invalid');
        await page.click('input[type="submit"]');
        await page.waitForSelector('.alert-error');
        console.log('---------------------------------------Login Test - Invalid Credentials');
    });

    it('Login Test - Valid Credentials', async () => {
        await page.goto('http://zero.webappsecurity.com/index.html');
        await page.waitForSelector('#signin_button');
        await page.click('#signin_button');
        await page.waitForSelector('#login_form');
        await page.type('#user_login', 'username');
        await page.type('#user_password', 'password');
        await page.click('input[type="submit"]');
        await shouldNotExist(page, '#signin_button');
        await new Promise(resolve => setTimeout(resolve, 1000));
        await browser.close();
        console.log('---------------------------------------Login Test - Valid Credentials');
    });
}
);
