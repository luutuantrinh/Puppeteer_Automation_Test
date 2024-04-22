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
        await page.goto('http://zero.webappsecurity.com/bank/pay-bills.html');
        console.log('---------------------------------------Login to Application');
    });

    it('Display Currency Exchange Form', async () => {
        await page.click('#ui-tabs-3');
        await page.waitForSelector('.board');
        console.log('---------------------------------------Display Currency Exchange Form');
    })

    // đang lỗi
    it('Exchange Currency', async () => {
        await page.goto('http://zero.webappsecurity.com/bank/pay-bills.html');
        await page.waitForXPath('/html/body/div[1]/div[2]/div/div[2]/div/div/div[2]/ul/li[3]/a');
        const link = await page.$x('/html/body/div[1]/div[2]/div/div[2]/div/div/div[2]/ul/li[3]/a');
        await link[0].click();
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