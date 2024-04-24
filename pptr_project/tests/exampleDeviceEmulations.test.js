const puppeteer = require('puppeteer');
const KnownDevices = puppeteer.KnownDevices // thư viện này chứa các thiết bị đã biết
const Galaxy = KnownDevices['Galaxy Note 3']; // thiết bị Galaxy Note 3

describe('Device Emulation Test', () => {
    let browser;
    let page;

    before(async function () {
        browser = await puppeteer.launch({ headless: false, devtools: true });
        page = await browser.newPage();
        await page.goto('https://example.com/');
        await page.setDefaultTimeout(10000);
        await page.setDefaultNavigationTimeout(20000);
    });

    after(async function () {
        await browser.close();
    });

    beforeEach(async function () {
        await page.goto('https://example.com/');
    });

    afterEach(async function () {
        await page.goto('https://example.com/');
    });

    it('Desktop device test', async () => {
        await page.setViewport({ width: 1650, height: 1050 }); // Set kích thước màn hình
       // await page.setDefaultTimeout(5000); // Set timeout cho page;
    });


    // Đang lỗi
    it('Tablet device test', async () => {
        const tablet = devices['iPad landscape']; // Set device là iPad landscape
        await page.emulate(tablet); // Emulate device
        await page.goto('https://example.com/');
        await page.setDefaultTimeout(5000); // Set timeout cho page;
    });

    // Đang lỗi
    it('Mobile device test', async () => {
        await page.emulate(Galaxy); // mô phỏng thiết bị Galaxy Note 3
        await page.setDefaultTimeout(5000); // Set timeout cho page;
    });
});