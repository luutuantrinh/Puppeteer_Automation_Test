const puppeteer = require('puppeteer'); 
const KnownDevices = puppeteer.KnownDevices // thư viện này chứa các thiết bị đã biết
const IphoneX = KnownDevices['iPhone X']; // Lấy thông số của thiết bị iPhone X.
const IpadLandscape = KnownDevices['iPad landscape']; // Lấy thông số của thiết bị iPad landscape.



class Builder {
    static async build(viewport) {
        const launchOptions = {
            headless: false,
            // slowMo: 10,
            devtools: false,
            args: [
                '--no-sandbox',
                '--disable-setui-sandbox',
                '--disable-web-security'
            ]
        };

        const browser = await puppeteer.launch(launchOptions); // Mở trình duyệt
        const page = await browser.newPage(); // Mở trang mới
        const extendedPage = new Builder(page); // Tạo một instance mới của Builder
        await page.setDefaultTimeout(10000); // Timeout mặc định

        switch(viewport) {
            case 'Mobile':
                await page.emulate(IphoneX);
                break;
            case 'Tablet':
                await page.emulate(IpadLandscape);
                break;
            case 'Desktop':
                await page.setViewport({ width: 800, height: 600 });
                break;
            default:
                throw new Error('Supported devices are only Mobile | Tablet | Desktop');
        }

        return new Proxy(extendedPage, { // Tạo một Proxy để truy cập các thuộc tính của extendedPage
            get: function(_target, property) { // Hàm này sẽ được gọi mỗi khi thuộc tính của extendedPage được truy cập
                return extendedPage[property] || browser[property] || page[property]; // Trả về thuộc tính của extendedPage nếu có, nếu không thì trả về thuộc tính của browser hoặc page
            }
        });
    }
    // Constructor của Builder
    constructor(page) {
        this.page = page;
    }

    async waitAndClick(selector) {
        await this.page.waitForSelector(selector);
        await this.page.click(selector);
    }

    async waitAndType(selector, text) {
        await this.page.waitForSelector(selector);
        await this.page.type(selector, text);
    }
    
    async getText(selector) {
        await this.page.waitForSelector(selector);
        const text = await this.page.$eval(selector, e => e.innerHTML);
        return text;
    }
    
    async getCount(selector) {
        await this.page.waitForSelector(selector);
        const count = await this.page.$$eval(selector, items => items.length);
        return count;
    }
    
    async waitForXPathAndClick(xpath) {
        await this.page.waitForXPath(xpath);
        const elements = await this.page.$x(xpath);
        if (elements.length > 1) {
        console.warn("waitForXPathAndClick returned more than one result");
        }
        await elements[0].click();
    }
    
    async isElementVisible(selector) {
        let visible = true;
        await this.page
        .waitForSelector(selector, { visible: true, timeout: 3000 })
        .catch(() => {
            visible = false;
        });
        return visible;
    }
    
    async isXPathVisible(selector) {
        let visible = true;
        await this.page
        .waitForXPath(selector, { visible: true, timeout: 3000 })
        .catch(() => {
            visible = false;
        });
        return visible;
    }
}

module.exports = Builder; // Xuất module Builder