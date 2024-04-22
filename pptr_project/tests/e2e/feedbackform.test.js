const puppeteer = require('puppeteer');
const { expect } = require('chai'); // Chai: thư viện test assertion

describe('Feedback Form Test', () => {
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

    it('Display Feedback Form', async () => {
        await page.goto('http://zero.webappsecurity.com/index.html');
        await page.waitForSelector('#feedback');
        await page.click('#feedback');
        
        console.log('---------------------------------------Display Feedback Form');
    });
    it('Submit Feedback Form', async () => {
        await page.goto('http://zero.webappsecurity.com/index.html');
        await page.waitForSelector('#feedback');
        await page.click('#feedback');
        await page.waitForSelector('form');
        await page.type('#name', 'Name');
        await page.type('#email', 'heoconmanga88@gmail.com');
        await page.type('#subject', 'Subject');
        await page.type('#comment', 'Just a message here');
        await page.click('input[type="submit"]');
        await page.waitForSelector('.offset3');
        
        console.log('---------------------------------------Submit Feedback Form');
        
    });
    it('Display Feedback Results', async () => {
        await page.waitForSelector('.offset3'); // Chờ cho selector '.offset3' xuất hiện
        const url = await page.url(); // Lấy url hiện tại
        expect(url).to.include('/sendFeedback.html'); // Kiểm tra url có chứa '/sendFeedback.html' không
        await new Promise(resolve => setTimeout(resolve, 1000)); // Đợi 1s
        await browser.close();
        console.log('---------------------------------------Display Feedback Results');
    });
});
