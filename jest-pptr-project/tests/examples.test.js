import HomePage from "../pages/HomePage";
import TopBar from "../pages/components/TopBar";
import LoginPage from "../pages/LoginPage";
import FeedbackPage from "../pages/FeedbackPage";
import { username, password, timeout30000, timeout15000, timeout10000, timeout20000 } from "../config";

describe("Example Test", () => {
    let homepage;
    let topbar;
    let loginPage;
    let feedbackPage;
    beforeAll(async () => {
        jest.setTimeout(timeout30000);
        homepage = new HomePage();
        topbar = new TopBar();
        loginPage = new LoginPage();
        feedbackPage = new FeedbackPage();
    });

    it("homepage should work", async () => {
        await homepage.visit();
        await homepage.isNavbarDisplayed();
    }, timeout15000); // 15s

    it("navbar should be displayed", async () => {
        await homepage.isNavbarDisplayed();
        await topbar.isTopBarDisplayed();
    });

    it("Try to Login", async () => {
        await loginPage.visit();
        await loginPage.isLoginFormDisplayed();
        await loginPage.login(username, password);
        await loginPage.visit();
    }, timeout10000);

    it("Feedback form should work", async () => {
        await feedbackPage.visit();
        await feedbackPage.isFeedbackFormDisplayed();
    }, timeout15000);

    it("Submit feedback form", async () => {
        await feedbackPage.submitFeedback(
            "name",
            "email",
            "subject",
            "comment"
        );
        await feedbackPage.wait(5000);
    }, timeout20000);
});