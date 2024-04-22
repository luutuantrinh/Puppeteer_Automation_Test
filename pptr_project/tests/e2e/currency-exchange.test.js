const puppeteer = require('puppeteer');

describe('Currency Exchange Test', () => {
    let browser;
    let page;

    before(async function () {
        browser = await puppeteer.launch({ 
            headless: false, 
            devtools: false,
        });
        page = await browser.newPage();
        await page.setDefaultTimeout(10000);
        await page.setDefaultNavigationTimeout(30000);
    });

    after(async function () {
        await browser.close();
    });

    it('Login to Application', async () => {
        await page.goto('http://zero.webappsecurity.com/index.html');
        await page.waitForSelector('#signin_button');
        await page.click('#signin_button');
        await page.waitForSelector('#login_form');
        await page.type('#user_login', 'username');
        await page.type('#user_password', 'password');
        await page.click('input[type="submit"]');
        
        console.log('---------------------------------------Login to Application');
    });

    // đang lỗi
    it('Exchange Currency', async () => {
        await page.goto('http://zero.webappsecurity.com/bank/pay-bills.html#ui-tabs-3');
        await page.waitForSelector('#pc_currency');
        await page.select('#pc_currency', 'GBP');
        await page.type('#pc_amount', '800');
        await page.click('#pc_inDollars_true');
        await page.click('#purchase_cash');
        await page.waitForSelector('#alert_content');
        console.log('---------------------------------------Exchange Currency');
        await new Promise(resolve => setTimeout(resolve, 1000)); // Đợi 1s
        await browser.close();
        }
    )

});