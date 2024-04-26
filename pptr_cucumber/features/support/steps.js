const { Given, When, Then, After } = require('cucumber');


Before(async function() {
    // This hook will be executed before all scenarios
    return await this.launchBrowser();
});

After(async function() {
    // This hook will be executed after all scenarios
    return await this.closeBrowser();
});

Given('I open login page', {timeout: 30000}, async function() {
    return await this.visit();
});

When('I fill login form', {timeout: 30000}, async function() {
    return await this.fillLoginForm();
});

When('I click on submit button', async function() {
    return await this.submitLoginForm();
});

Then('I expect to see application  content', async function() {
    return await this.verifySuccessfulLogin();
});