//const puppeteer = require('puppeteer'); // Puppeteer: thư viện test headless browser
import puppeteer from 'puppeteer'; // Puppeteer: thư viện test headless browser

(async () => {
    const browser = await puppeteer.launch({ headless: false, args:['--incognito'] }); // Mở trình duyệt
    const page = await browser.newPage(); // Mở trang mới
    await page.goto('https://www.google.com', { waitUntil :"networkidle0"}); // Đi đến trang Google và chờ tải xong
    await page.screenshot({ path: 'example-Cognito.png', fullPage: true }); // Chụp ảnh trang
    await browser.close(); // Đóng trình duyệt
    })(); // Hàm async tự gọi chính nó