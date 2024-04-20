const puppeteer = require('puppeteer');
// Test  https://example.com/
describe('Example Test', () => {
    it('should launch the browser', async () => {
        const browser = await puppeteer.launch({ 
            headless: false, 
            //slowMo: 1000, 
            devtools: true});
        const page = await browser.newPage();
        await page.goto('https://example.com/');
        const text = await page.$eval('h1', element => element.textContent); // $eval: lấy text của element
        console.log('Text in H1: ' + text);
        await new Promise(resolve => setTimeout(resolve, 1000));
        await browser.close();
}
)});


<script src="chai.js" type="text/javascript"></script>