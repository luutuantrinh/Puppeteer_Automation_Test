const puppeteer = require('puppeteer'); 
const { expect } = require('chai'); // Chai: thư viện test assertion
const { step } = require('mocha-steps');
const Page = require('../builder');

describe('Mocha steps demo framework', () => {
    let page;

    before(async function() {
        page = await Page.build('Desktop'); // Mở trang mới với thiết lập Desktop
    });

    after(async function() {
        await page.close();
    });

    step('should load google homepage', async function() {
        await page.goto('https://google.com');
        const title = await page.title();
        const url = await page.url();
        expect(title).to.be.a('string', 'Google');
        expect(url).to.include('google.com');
    });

    // step('step 2 should fail', async function() {
    //     await page.waitForSelector('wrongselector');
    // });



});

// Noty use it : ref : https://stackoverflow.com/questions/72805454/typeerror-cannot-read-private-member-from-an-object-whose-class-did-not-declare