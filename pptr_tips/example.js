const puppeteer = require('puppeteer'); // Puppeteer: thư viện test headless browser
const KnownDevices = puppeteer.KnownDevices // thư viện này chứa các thiết bị đã biết
const iPhone11ProMax = KnownDevices['iPhone 11 Pro Max']; // thiết bị Galaxy Note 3

(async () => {
    const browser = await puppeteer.launch(); // Mở trình duyệt
    const page = await browser.newPage(); // Mở trang mới
    await page.goto('https://www.google.com', { waitUntil :"networkidle0"}); // Đi đến trang Google và chờ tải xong
    await page.screenshot({ path: 'example.png', fullPage: true }); // Chụp ảnh trang
    await browser.close(); // Đóng trình duyệt
    })(); // Hàm async tự gọi chính nó

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.google.com', { waitUntil :"networkidle0"});
    //chụp và xuất ra pdf
    await page.pdf({path: 'example.pdf', format: 'A4'});
    await browser.close();
    })();

(async () => {
    const browser = await puppeteer.launch({ headless: false }); // Mở trình duyệt
    const page = await browser.newPage();
    await page.goto('https://www.google.com', { waitUntil :"networkidle0"});
    await page.emulate(iPhone11ProMax); // mô phỏng thiết bị Galaxy Note 3
    await page.setDefaultTimeout(5000); // Set timeout cho page;
    await page.screenshot({ path: 'example-iphone11ProMax.png', fullPage: true });
    await browser.close();
    })();

//Fake location
(async () => {
    const browser = await puppeteer.launch({ headless: false }); // Mở trình duyệt
    const page = await browser.newPage();

    const context = browser.defaultBrowserContext();
    await context.overridePermissions('https://www.google.com', ['geolocation']);
    await page.goto('https://www.google.com', { waitUntil :"networkidle0"});
    // chờ span class="gb_Kd" xuất hiện
    await page.waitForSelector('.gb_Kd'); 
    await page.setGeolocation({latitude: 90, longitude: 0}); // Set vị trí
    await page.screenshot({ path: 'example-location.png', fullPage: true });
    await browser.close();
    })();

//Accessibility test
(async () => {
    const browser = await puppeteer.launch({ headless: false }); // Mở trình duyệt
    const page = await browser.newPage();
    await page.goto('https://www.google.com', { waitUntil :"networkidle0"});
    await page.screenshot({ path: 'example-accessibility.png', fullPage: true });
    const accessibility = await page.accessibility.snapshot(); // Lấy thông tin accessibility
    console.log(accessibility);
    // ghi log vào file text 
    const fs = require('fs');
    fs.writeFileSync('accessibility.txt', JSON.stringify(accessibility));
    // tự động format fie text vừa tạo 
    const { exec } = require('child_process'); // Thư viện này giúp chạy lệnh trong terminal
    exec('prettier --write accessibility.txt'); // Format file text

    await browser.close();
    })();

//Test performance
(async () => {
    const browser = await puppeteer.launch({ headless: false }); // Mở trình duyệt
    const page = await browser.newPage();
    await page.goto('https://www.google.com', { waitUntil :"networkidle0"});
    const performance = await page.evaluate(() => JSON.stringify(window.performance)); // Lấy thông tin performance
    //console performance có format xuống dòng nên cần format lại
    console.log(JSON.parse(performance));
    // ghi log vào file text 
    const fs = require('fs');
    fs.writeFileSync('performance.txt', performance);
    // tự động format fie text vừa tạo
    const { exec } = require('child_process'); // Thư viện này giúp chạy lệnh trong terminal
    exec('prettier --write performance.txt'); // Format file text
    await browser.close();
    })();