const { setWorldConstructor } = require('cucumber');
const { expect } = require('chai'); // Chai: thư viện test assertion
const puppeteer = require('puppeteer'); // Puppeteer: thư viện test headless browser

class CustomWorld {
    constructor() {
    }

    async launchBrowser() {
        this.browser = await puppeteer.launch({ headless: false });
        this.page = await this.browser.newPage();
    }

    async closeBrowser() {
        await this.browser.close();
    }

    async visit() {
        await this.page.goto('http://zero.webappsecurity.com/login.html');
    }

    async fillLoginForm() {
        await this.page.waitForSelector('#user_login');
        await this.page.type('#user_login', 'username');
        await this.page.type('#user_password', 'password');
    }

    async submitLoginForm() {
        await this.page.click('.btn-primary');
    }

    async verifySuccessfulLogin() {
        await this.page.goto('http://zero.webappsecurity.com/bank/account-summary.html');
        await this.page.waitForSelector('#settingsBox'); // Chờ cho element có id='settingsBox' xuất hiện
        const url = await this.page.url(); // Lấy URL hiện tại
        expect(url).to.include('account-summary.html'); // Chai: so sánh URL hiện tại có chứa 'dashboard.html' không
    }
}

setWorldConstructor(CustomWorld); // Set CustomWorld as the world constructor
