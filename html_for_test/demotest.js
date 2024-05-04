describe('Demo test', () => {
    it('Login the google website', () => {
        //Open the google website
        browser.url('https://www.google.com/');
        //Wait for the page to load
        browser.pause(2000);
        //Get the title of the page
        let title = browser.getTitle();
        //Print the title of the page
        console.log('Title of the page: ' + title);
        //Output
        //Title of the page: Google
    });
    it('Search for "webdriverio" on google', () => {
        //Find the search box
        let searchBox = $('input[name="q"]');
        //Type "webdriverio" in the search box
        searchBox.setValue('webdriverio');
        //Press Enter key
        browser.keys('Enter');
        //Wait for the page to load
        browser.pause(2000);
        //Get the title of the page
        let title = browser.getTitle();
        //Print the title of the page
        console.log('Title of the page: ' + title);
        //Output
        //Title of the page: webdriverio - Google Search
    });
});