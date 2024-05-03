const { launch } = require("puppeteer");

module.exports = {
    launch: {
        headless: false,
        //lowMo: 100,
    },
    browserContext: "default",
};