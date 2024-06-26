const puppeteer = require('puppeteer'); 
const { expect } = require('chai'); // Chai: thư viện test assertion
const { step } = require('mocha-steps');

describe('Mocha steps demo', () => {
    let browser;
    let page;

    before(async function() {
        browser = await puppeteer.launch({
            headless: false,
            slowMo: 10,
            devtools: false
        });
        page = await browser.newPage();
        await page.setDefaultTimeout(10000);
    });

    after(async function() {
        await browser.close();
    });

    step('should load google homepage', async function() {
        await page.goto('https://google.com');
        const title = await page.title();
        const url = await page.url();
        expect(title).to.be.a('string', 'Google');
        expect(url).to.include('google.com');
    });

    step('step 2 should fail', async function() {
        await page.waitForSelector('wrongselector');
    });

});