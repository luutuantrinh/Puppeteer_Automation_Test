describe('Google Test', () => {

    it('should open Google page', async () => {
        jest.setTimeout(15000);
        await page.goto('https://www.google.com');
        await new Promise(resolve => setTimeout(resolve, 6000));
        //await page.close();
    }, 10000);
    });