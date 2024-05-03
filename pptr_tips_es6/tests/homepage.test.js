import puppeteer from "puppeteer";
import HomePage from './homepage.js';
import { expect } from 'chai';

//test  page http://zero.webappsecurity.com/index.html

describe("Load homepage", () => {
    let browser;
    let page;

    before(async () => {
        browser = await puppeteer.launch({ headless: false, devtools: false});
        page = await browser.newPage();
        await page.setDefaultTimeout(10000);
        await page.setDefaultNavigationTimeout(20000);
    });

    after(async () => {
        await browser.close();
    });

    it("should load homepage", async () => {
        const homePage = new HomePage(page);
        await homePage.open();
        const title = await page.title();
        expect(title).to.be.a('string', 'Zero - Personal Banking - Loans - Credit Cards'); 
    });
});