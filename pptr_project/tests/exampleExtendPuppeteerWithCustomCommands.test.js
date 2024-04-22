const puppeteer = require('puppeteer');
const { expect } = require('chai'); // Chai: thư viện test assertion

// const click = require('../lib/helpers').click;
// const getText = require('../lib/helpers').getText;
// const getCount = require('../lib/helpers').getCount;
// const typeText = require('../lib/helpers').typeText;
// const waitForText = require('../lib/helpers').waitForText;
// const shouldNotExist = require('../lib/helpers').shouldNotExist;

const { click, getText, getCount, typeText, waitForText, shouldNotExist } = require('../lib/helpers'); // Import các hàm từ file helpers.js

describe('test library', () => {
    let browser;
    let page;
    before(async function () {
        browser = await puppeteer.launch({ 
            headless: false, 
            devtools: false,
            //slowMo: 500,
        });
        page = await browser.newPage();
        //await page.goto('https://example.com/');
        await page.setDefaultTimeout(10000);
        await page.setDefaultNavigationTimeout(20000);
    });

    afterEach(async function () {
    });

    after(async function () {
        await browser.close();
    }
    );

    // Test function basic

    it('should launch the browser', async () => {
        await page.goto('http://zero.webappsecurity.com/index.html');
        await page.waitForSelector('#signin_button');

        //await page.waitForSelector('#signin_button');
        await click(page, '#signin_button'); // Nhấp vào nút đăng nhập
        await page.waitForFunction(() => !document.querySelector('#signin_button')); //Phương thức waitForFunction sẽ chờ cho đến khi function bạn truyền vào trả về true. Trong trường hợp của bạn, nó sẽ chờ cho đến khi element với id signin_button không còn xuất hiện trên trang.
        await page.waitForSelector('#signin_button', {hidden: true}); // Chờ cho element không còn xuất hiện
        //await browser.close();
        console.log('---------------------------------------should launch the browser');
    });

    it('should test for getText and getCount ', async () => {
        
        await page.goto('https://example.com/');
        await page.waitForSelector('h1');
        const text = await getText(page, 'h1');
        const count = await getCount(page, 'p');
        console.log('Text of the h1 is: ' + text);
        console.log('Number of paragraphs on the page: ' + count);

        console.log('---------------------------------------should test for getText and getCount');
        // await new Promise(resolve => setTimeout(resolve, 10000));
        // await browser.close();
        
    });

    it('should test typeText', async () => {
        await page.goto('https://devexpress.github.io/testcafe/example/');
        await typeText(page, '#developer-name', 'Hello, World');
        await page.keyboard.press('Enter');
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('---------------------------------------should test typeText');
    }
    );
    it('should test waitForText', async () => {
        await page.goto('https://devexpress.github.io/testcafe/example/');
        await typeText(page, '#developer-name', 'Hello, World');
        await page.keyboard.press('Enter');
        await waitForText(page, '#article-header', 'Thank you, Hello, World!');
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        console.log('---------------------------------------should test waitForText');
    });
    it('should test shouldNotExist', async () => {
        await page.goto('http://zero.webappsecurity.com/login.html');
        await shouldNotExist(page, '#signin_button');
        await new Promise(resolve => setTimeout(resolve, 1000));
        await browser.close();
        console.log('---------------------------------------should test shouldNotExist');
    });
});