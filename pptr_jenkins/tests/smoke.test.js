const puppeteer = require('puppeteer'); // Puppeteer: thư viện test headless browser
let expect;

// test on https://devexpress.github.io/testcafe/example/

describe('Smoke test', () => {
    let browser;
    before(async () => {
        const chai = await import('chai');
        expect = chai.expect;
    });
    afterEach(async () => {
        // Close the browser after each test
        if (browser) await browser.close();
    });

    it('should open the test page', async () => {
        browser = await puppeteer.launch({ 
            headless: false, 
            //slowMo: 1000, 
            devtools: true});
        const page = await browser.newPage();
        await page.goto('https://devexpress.github.io/testcafe/example/');
        const title = await page.title();
        expect(title).to.equal('TestCafe Example Page');
    await browser.close();
    });
});