'use strict';

var _builder = require('../builder');

var _builder2 = _interopRequireDefault(_builder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var puppeteer = require('puppeteer');

var _require = require('chai'),
    expect = _require.expect; // Chai: thư viện test assertion


var _require2 = require('mocha-steps'),
    step = _require2.step;

// Import class Page từ file builder.js


describe('Mocha steps demo', function () {
    var page = void 0;

    before(async function () {
        page = await _builder2.default.build('Desktop'); // Mở trang mới với thiết lập Desktop
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