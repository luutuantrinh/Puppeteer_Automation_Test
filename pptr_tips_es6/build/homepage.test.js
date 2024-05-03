'use strict';

var _puppeteer = require('puppeteer');

var _puppeteer2 = _interopRequireDefault(_puppeteer);

var _homepage = require('./homepage.js');

var _homepage2 = _interopRequireDefault(_homepage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = require('chai'),
    expect = _require.expect; // Chai: thư viện test assertion

//test  page http://zero.webappsecurity.com/index.html

describe("Load homepage", function () {
    var browser = void 0;
    var page = void 0;

    beforeAll(async function () {
        browser = await _puppeteer2.default.launch({ headless: false, devtools: false });
        page = await browser.newPage();
        await page.setDefaultTimeout(10000);
        await page.setDefaultNavigationTimeout(20000);
    });

    afterAll(async function () {
        await browser.close();
    });

    it("should load homepage", async function () {
        var homePage = new _homepage2.default(page);
        await homePage.open();
        var title = await page.title();
        expect(title).to.be.a('string', 'Zero - Personal Banking - Loans - Credit Cards');
    });
});