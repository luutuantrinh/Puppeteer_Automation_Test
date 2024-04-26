'use strict';

var puppeteer = require('puppeteer');

var _require = require('chai'),
    expect = _require.expect; // Chai: thư viện test assertion


var _require2 = require('mocha-steps'),
    step = _require2.step;

describe('Mocha steps demo', function () {
    var browser = void 0;
    var page = void 0;

    before(async function () {
        browser = await puppeteer.launch({
            headless: false,
            slowMo: 10,
            devtools: false
        });
        page = await browser.newPage();
        await page.setDefaultTimeout(10000);
    });

    after(async function () {
        await browser.close();
    });

    step('should load google homepage', async function () {
        await page.goto('https://google.com');
        var title = await page.title();
        var url = await page.url();
        expect(title).to.be.a('string', 'Google');
        expect(url).to.include('google.com');
    });

    step('step 2 should fail', async function () {
        await page.waitForSelector('wrongselector');
    });
});