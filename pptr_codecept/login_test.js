const assert = require('assert');

Feature('login');

Scenario('login to example.com',  ({ I }) => {
    I.amOnPage("https://example.com/"); // Mở trang web AWS
    I.see('Example Domain'); // Kiểm tra xem trang web có chứa text "Example Domain" không
    I.dontSee('Example Domain 2'); // Kiểm tra xem trang web có chứa text "Example Domain 2" không
    I.seeElement('h1'); // Kiểm tra xem trang web có chứa element h1 không
    I.dontSeeElement('.not-exist'); // Kiểm tra xem trang web có chứa element có class là not-exist không
    I.wait(3); // Chờ 3 giây
    I.saveScreenshot('example.png', true); // Lưu ảnh màn hình
});

Scenario('login google.com',  ({ I }) => {
    I.amOnPage("https://www.google.com"); // Mở trang web google
    I.wait(3); // Chờ 3 giây
    I.saveScreenshot('google.png', true); // Lưu ảnh màn hình
});
Scenario('login aws console.com',  ({ I }) => {
    I.amOnPage("https://console.aws.amazon.com/"); // Mở trang web AWS
    I.wait(3); // Chờ 3 giây
    I.saveScreenshot('aws.png', true); // Lưu ảnh màn hình
});

Scenario('test assert', async ({ I }) => {
    I.amOnPage("https://example.com/"); 
    const title = await I.grabTextFrom("h1"); // Lấy text từ element h1
    I.wait(3);
    assert.equal(title, "Example Domain", "Text does not match .."); // So sánh title với "Example Domain"
});
