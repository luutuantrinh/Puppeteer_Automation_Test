const puppeteer = require('puppeteer'); // Puppeteer: thư viện test headless browser
const { expect } = require('chai'); // Chai: thư viện test assertion

// Test  https://example.com/
describe('Example Test', () => {
    let browser;
    let page;

    //- `before`: Hook này chỉ chạy một lần trước tất cả các test trong một block `describe`. 
    //Nó thường được sử dụng để thiết lập một số điều kiện chung cho tất cả các test, như kết nối đến cơ sở dữ liệu, khởi tạo một số đối tượng...
    before(async function () { 
        browser = await puppeteer.launch({ 
            headless: false, 
            //slowMo: 1000, 
            devtools: true});
        page = await browser.newPage();
        await page.setDefaultTimeout(10000); // Set timeout cho page
        await page.setDefaultNavigationTimeout(20000); // Set timeout cho navigation
    });

    after(async function () {
        await browser.close();
    });

    //- `beforeEach`: Hook này chạy trước mỗi test trong một block `describe`. 
    // Nó thường được sử dụng để thiết lập một số điều kiện cho từng test, như reset trạng thái của một đối tượng, tạo mới một đối tượng...
    beforeEach(async function () {
        //await page.goto('https://example.com/');
    });

    //afterEach thường được sử dụng để dọn dẹp hoặc reset trạng thái sau khi mỗi test được thực hiện. 
    //Điều này đảm bảo rằng mỗi test được thực hiện trong một môi trường độc lập, không bị ảnh hưởng bởi các test khác.
    afterEach(async function () {
        //await page.goto('https://example.com/');
    });

    it('should launch the browser', async () => {
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
}
)});