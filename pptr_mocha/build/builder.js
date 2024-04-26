'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var puppeteer = require('puppeteer');
var KnownDevices = puppeteer.KnownDevices; // thư viện này chứa các thiết bị đã biết
var IphoneX = KnownDevices['iPhone X']; // Lấy thông số của thiết bị iPhone X.
var IpadLandscape = KnownDevices['iPad landscape']; // Lấy thông số của thiết bị iPad landscape.

var Builder = function () {
    _createClass(Builder, null, [{
        key: 'build',
        value: async function build(viewport) {
            var launchOptions = {
                headless: false,
                slowMo: 10,
                devtools: false,
                args: ['--no-sandbox', '--disable-setui-sandbox', '--disable-web-security']
            };

            var browser = await puppeteer.launch(launchOptions); // Mở trình duyệt
            var page = await browser.newPage(); // Mở trang mới
            var extendedPage = new Builder(page); // Tạo một instance mới của Builder
            await page.setDefaultTimeout(10000); // Timeout mặc định

            switch (viewport) {
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
                get: function get(_target, property) {
                    // Hàm này sẽ được gọi mỗi khi thuộc tính của extendedPage được truy cập
                    return extendedPage[property] || browser[property] || page[property]; // Trả về thuộc tính của extendedPage nếu có, nếu không thì trả về thuộc tính của browser hoặc page
                }
            });
        }
        // Constructor của Builder

    }]);

    function Builder(page) {
        _classCallCheck(this, Builder);

        this.page = page;
    }

    return Builder;
}();

exports.default = Builder;