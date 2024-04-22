const puppeteer = require('puppeteer');

describe('Payment Test', () => {
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

    it('Display Payment Form', async () => {
        await page.goto('http://zero.webappsecurity.com/index.html');
        await page.waitForSelector('#signin_button');
        await page.click('#signin_button');
        await page.waitForSelector('#login_form');
        await page.type('#user_login', 'username');
        await page.type('#user_password', 'password');
        await page.click('input[type="submit"]');
        await page.goto('http://zero.webappsecurity.com/bank/pay-bills.html');
        await page.waitForSelector('.top_offset');
        console.log('---------------------------------------Display Payment Form');

    });
    it('Make Payment', async () => {
        await page.waitForSelector('.top_offset');
        await page.select('#sp_payee', 'apple');
        await page.select('#sp_account', 'Credit Card');
        await page.type('#sp_amount', '500');
        await page.type('#sp_date', '2020-03-31');
        await page.keyboard.press('Enter');
        await page.type('#sp_description', 'Payment for rent.');
        await page.click('#pay_saved_payees');
        await page.waitForSelector('#alert_content');
        console.log('---------------------------------------Make Payment');
        await new Promise(resolve => setTimeout(resolve, 1000)); // Đợi 1s
        await browser.close();
        }
    )

});
