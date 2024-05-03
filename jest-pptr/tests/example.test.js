const { JestEnvironment } = require("@jest/environment");


describe("Google Homepage", () => {
    beforeAll(async () => {
        jest.setTimeout(30000);
        await page.goto("https://www.google.com");
    });

    it("should load homepage", async () => {
        // chờ cho span gb_Kd load xong 
        await page.waitForSelector("span.gb_Kd");

        //await jestPuppeteer.debug();
        
        let title = await page.title();
        console.log("Title is " + title);
    });
});