const puppeteer = require('puppeteer'); // Puppeteer: thư viện test headless browser

(async () => {
    // Mở trình duyệt ẩn danh để test 
    const browser = await puppeteer.launch({ headless: true,
        args: ['--incognito']});

   // Create a new browser context
    const context = await browser.createBrowserContext();
    // Create a new page inside context.
    const page = await context.newPage();
    await page.goto('https://example.com');
    //Dừng chờ trang chạy h1
    await page.waitForSelector("h1");
    await context.close();
});