const puppeteer = require('puppeteer'); // Puppeteer: thư viện test headless browser
const { expect } = require('chai'); // Chai: thư viện test assertion

// Test  https://example.com/
describe('Example Test', () => {
    it('should launch the browser', async () => {
        const browser = await puppeteer.launch({ 
            headless: false, 
            //slowMo: 1000, 
            devtools: true});
        const page = await browser.newPage();
        await page.setDefaultTimeout(10000); // Set timeout cho page
        await page.setDefaultNavigationTimeout(20000); // Set timeout cho navigation
        await page.goto('https://example.com/');

        const title = await page.title(); // Lấy title của trang
        const url = await page.url(); // Lấy url của trang
        const texth1 = await page.$eval('h1', element => element.textContent); // Lấy text của element h1
        const countptag = await page.$$eval('p', element => element.length); // Đếm số lượng element p
        
        
        
        // Kiểm tra các điều kiện
        //expect with title
        expect(title).to.be.a('string', 'Example Domain'); // So sánh title với 'Example Domain'
        expect(url).to.include('example.com'); // So sánh url có chứa 'example.com' hay không
        expect(texth1).to.be.a('string', 'Example Domain'); // So sánh text của h1 với 'Example Domain'
        expect(countptag).to.equal(2); // So sánh số lượng element p có bằng 2 hay không

        //await new Promise(resolve => setTimeout(resolve, 5000));
        await browser.close();
}
)});