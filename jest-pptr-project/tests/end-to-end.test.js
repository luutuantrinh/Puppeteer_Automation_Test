import LoginPage from "../pages/LoginPage";
import FeedbackPage from "../pages/FeedbackPage";
import BasePage from "../pages/BasePage";
import HomePage from "../pages/HomePage";
import TopBar from "../pages/components/TopBar";

describe("End to End Test", () => {
    let homepage;
    let topbar;
    let loginPage;
    let feedbackPage;
    let basePage;

    beforeAll(async () => {
        jest.setTimeout(15000);
        homepage = new HomePage();
        topbar = new TopBar();
        loginPage = new LoginPage();
        feedbackPage = new FeedbackPage();
        basePage = new BasePage();
    });

    it("homepage should work End2End Test", async () => {
        await homepage.visit();
        await homepage.isNavbarDisplayed();
    }, 20000);

    it("should submit feedback End2End Test", async () => {
        await homepage.clickFeedbackLink();
        await feedbackPage.isFeedbackFormDisplayed();
        await feedbackPage.submitFeedback(
            "name",
            "email",
            "subject",
            "comment"
        );
    },10000);
});