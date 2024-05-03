/**
 * Web scraper for the website https://books.toscrape.com/catalogue/tipping-the-velvet_999/index.html
 */
const puppeteer = require('puppeteer');
const config = require('./config');
const url = config.URL;
const randomUserAgent = require('random-useragent');

(async () => {
    const browser = await puppeteer.launch({ headless: config.HEADLESS });
    const page = await browser.newPage();
    await page.goto(url);

    //Set Default Timeout
    page.setDefaultTimeout(10000);

    //Set view port
    page.setViewport({ width: 1280, height: 800 });

    //Set User Agent
    await page.setUserAgent(randomUserAgent.getRandom()); // dùng để giả mạo trình duyệt

    //Get data from book store website
    const nameSelector = '.product_main h1'; 
    const priceSelector = '.price_color';
    await page.goto(url);
    await page.waitForSelector(nameSelector); // chờ cho đến khi selector xuất hiện
    await page.waitForSelector(priceSelector);
    const name = await page.$eval(nameSelector, el => el.textContent); // lấy text từ selector
    const price = await page.$eval(priceSelector, el => el.textContent); // lấy text từ selector

    const nameTrim = name.trim(); // xóa khoảng trắng ở đầu và cuối chuỗi
    const priceTrim = price.trim(); // xóa khoảng trắng ở đầu và cuối chuỗi
    console.log("Name is :" + nameTrim,"Price is :" + priceTrim);


    const title = await page.title();
    console.log("Title Web is :" + title);


    //Get current date and time 
    const date = new Date();
    // const day = date.getDate(); // lấy ngày
    // const month = date.getMonth() + 1; // lấy tháng
    // const year = date.getFullYear(); // lấy năm
    // ngày dạng dd 
    const day = ("0" + date.getDate()).slice(-2);
    // tháng dạng mm
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    // năm dạng yyyy
    const year = date.getFullYear();
    //full date format dd/mm/yyyy
    const fullDateFormat = day + "/" + month + "/" + year;
    const time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    //dạng giờ 12 tiếng dang HH 
    const hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();

    console.log("Current Date is :" + fullDateFormat);
    console.log("Current Time 24H is :" + time);
    // thêm chữ AM hoặc PM cho giờ 12 tiếng
    console.log("Current Time 12H is :" + hours + ":" + date.getMinutes() + ":" + date.getSeconds() + (date.getHours() >= 12 ? " PM" : " AM"));

    // Lưu thông tin vào file txt 
    const fs = require('fs');
    const path = require('path');
    const fileName = path.join(__dirname, 'data.txt');
    const data = `Book Name : ${nameTrim} \nPrice : ${priceTrim} \nTitle Web : ${title} \nCurrent Date : ${fullDateFormat} \nCurrent Time : ${time} \nCurrent Time 12H : ${hours}:${date.getMinutes()}:${date.getSeconds()} ${date.getHours() >= 12 ? "PM" : "AM"}`;
    fs.writeFileSync(fileName, data);
    console.log("Data has been written to file successfully");

    // Trả về file JSON lưu thông tin
    const jsonFileName = path.join(__dirname, 'data.json');
    const jsonData = {
        bookName: nameTrim,
        price: priceTrim,
        titleWeb: title,
        currentDate: fullDateFormat,
        currentTime: time,
        currentTime12H: hours + ":" + date.getMinutes() + ":" + date.getSeconds() + (date.getHours() >= 12 ? " PM" : " AM")
    };
    fs.writeFileSync(jsonFileName, JSON.stringify(jsonData));
    console.log("Data has been written to JSON file successfully");

    await browser.close();
})().catch((error) => {
    console.error(error);
    process.exit(1);
});
