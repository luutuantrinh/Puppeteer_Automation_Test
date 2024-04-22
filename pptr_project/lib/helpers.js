// Chức năng : Tạo ra các hàm hỗ trợ cho việc test
// Đầu vào: page, selector
module.exports = {
    click: async function(page, selector) { // Click vào selector
        try {
            await page.waitForSelector(selector); // Chờ cho đến khi selector xuất hiện
            await page.click(selector); // Click vào selector
        } catch (error) {
            throw new Error(`Could not click on selector: ${selector}`); // Nếu không thể click được thì báo lỗi
        }
    },
    getText: async function(page, selector) { // Lấy text từ selector
        try {
            await page.waitForSelector(selector); // Chờ cho đến khi selector xuất hiện
            return await page.$eval(selector, element => element.innerHTML); // Trả về text của selector
        } catch (error) {
            throw new Error(`Cannot get text from selector: ${selector}`); // Nếu không thể lấy được text thì báo lỗi
        }
    },
    getCount: async function(page, selector) { // Đếm số lượng selector
        try {
            await page.waitForSelector(selector); // Chờ cho đến khi selector xuất hiện
            return await page.$$eval(selector, element => element.length); // Trả về số lượng selector
        } catch (error) {
            throw new Error(`Cannot get count of selector: ${selector}`); // Nếu không thể đếm được thì báo lỗi
        }
    },
    typeText: async function(page, selector, text) { // Nhập text vào selector
        try {
            await page.waitForSelector(selector); // Chờ cho đến khi selector xuất hiện
            await page.type(selector, text); // Nhập text vào selector
        } catch (error) {
            throw new Error(`Could not type into selector: ${selector}`); // Nếu không thể nhập được thì báo lỗi
        }
    },
    waitForText: async function(page, selector, text, timeout = 3000) { // Chờ cho đến khi text xuất hiện
        try {
            await page.waitForSelector(selector); // Chờ cho đến khi selector xuất hiện
            await page.waitForFunction(
                (selector, text) => document.querySelector(selector).innerText.includes(text),
                {},
                selector,
                text
            );
        } catch (error) {
            throw new Error(`Text: ${text} not found for selector: ${selector}`); // Nếu không tìm thấy text thì báo lỗi
        }
    },
    shouldNotExist: async function(page, selector) { // Kiểm tra selector không tồn tại 
        let elements = await page.$$(selector); // Lấy tất cả các selector
        if (elements.length > 0) throw new Error(`Selector ${selector} should not exist`); // Nếu có tồn tại thì báo lỗi
        
    },
    
}
