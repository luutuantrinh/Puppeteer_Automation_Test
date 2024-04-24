const puppeteer = require('puppeteer'); 
const { toMatchImageSnapshot } = require('jest-image-snapshot'); // thư viện này dùng để so sánh ảnh

const KnownDevices = puppeteer.KnownDevices // thư viện này chứa các thiết bị đã biết
const Galaxy = KnownDevices['Galaxy Note 3']; // thiết bị Galaxy Note 3
const iPhone = KnownDevices['iPhone XR']; // thiết bị iPhone XR
const tablet = KnownDevices['iPhone 13 Pro Max']; // thiết bị iPhone 13 Pro Max

expect.extend({ toMatchImageSnapshot }); // thêm hàm toMatchImageSnapshot vào expect

describe('Visual regression testing', () => {
    let browser;
    let page;

    beforeAll(async () => { // trước khi chạy test
        browser = await puppeteer.launch({
            headless: false, // không hiển thị trình duyệt
            slowMo: 50, // chậm 50ms
        });
        page = await browser.newPage();
    });

    afterAll(async () => { // sau khi chạy test
        await browser.close();
    });

    test('Full page snapshot', async () => {
        await page.goto('https://example.com/');
        await page.waitForSelector('h1');
        const image = await page.screenshot(); // chụp ảnh
        expect(image).toMatchImageSnapshot({ // so sánh ảnh
            failureThresholdType: 'pixel', // so sánh theo pixel
            failureThreshold: 500, // ngưỡng thất bại là 500
        });
    });

    test('Single element snapshot', async () => {
        await page.goto('https://example.com/');
        const h1 = await page.waitForSelector('h1');
        const image = await h1.screenshot(); // chụp ảnh của h1
        expect(image).toMatchImageSnapshot({
            failureThresholdType: 'percent', // so sánh theo phần trăm
            failureThreshold: 0.01, // ngưỡng thất bại là 0.01
        });
    });

    test('Mobile Android snapshot', async () => {
        await page.goto('https://example.com/');
        await page.emulate(Galaxy); // mô phỏng thiết bị Galaxy Note 3
        await page.waitForSelector('h1');
        const image = await page.screenshot();
        expect(image).toMatchImageSnapshot({
            failureThresholdType: 'percent',
            failureThreshold: 0.01,
        });
    });

    test('Mobile iOS snapshot', async () => {
        await page.goto('https://example.com/');
        await page.emulate(iPhone); // mô phỏng thiết bị iPhone XR
        await page.waitForSelector('h1');
        const image = await page.screenshot();
        expect(image).toMatchImageSnapshot({
            failureThresholdType: 'percent',
            failureThreshold: 0.01,
        });
    });

    test('Tablet snapshot', async () => {
        await page.goto('https://example.com/');
        await page.emulate(tablet); // mô phỏng thiết bị iPhone 13 Pro Max
        await page.waitForSelector('h1');
        const image = await page.screenshot();
        expect(image).toMatchImageSnapshot({
            failureThresholdType: 'percent',
            failureThreshold: 0.01,
        });
    });

    test('Remove element before snapshot', async () => {
        await page.goto('https://example.com/');
        await page.evaluate(() => {
            document.querySelectorAll('h1').forEach(h1 => h1.remove()); // xóa h1
        });
        await new Promise(resolve => setTimeout(resolve, 3000));
        const image = await page.screenshot();
        expect(image).toMatchImageSnapshot({
            failureThresholdType: 'percent',
            failureThreshold: 0.01,
        });
    });
});