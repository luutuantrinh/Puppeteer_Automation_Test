// test on https://devexpress.github.io/testcafe/example/
const puppeteer = require('puppeteer'); // Puppeteer: thư viện test headless browser

describe('E2E test', () => {
    let browser;
    let page;
    let expect;
    before(async () => {
        browser = await puppeteer.launch({ headless: false, devtools: true });
        page = await browser.newPage();

        const chai = await import('chai');
        expect = chai.expect;
    });
    after(async () => {
        if (browser) await browser.close();
    });

    it('should open the test page', async () => {
        await page.goto('https://devexpress.github.io/testcafe/example/');
        const title = await page.title();
        expect(title).to.equal('TestCafe Example Page');
        
    }, 10000);

    it('should submit the form', async () => {
        await page.type('#developer-name', 'Luu Tuan Trinh');
        await page.click('#tried-test-cafe');
        await page.click('#submit-button');
        await page.waitForSelector('#article-header');
        const message = await page.$eval('#article-header', el => el.innerText);
        expect(message).to.equal('Thank you, Luu Tuan Trinh!');
    });

    it('should select a value from the select box preferred-interface-select ', async () => {
        await page.goto('https://devexpress.github.io/testcafe/example/');
        await page.waitForSelector('#preferred-interface');
        await new Promise(resolve => setTimeout(resolve, 3000));
        await page.select('#preferred-interface', 'JavaScript API');
        const value = await page.$eval('#preferred-interface', el => el.value);
        expect(value).to.equal('JavaScript API');
    }, 10000);
});