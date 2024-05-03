export default class HomePage {
    constructor(page) {
        this.page = page;
    }

    async open() {
        await this.page.goto('http://zero.webappsecurity.com/index.html');
    }
}