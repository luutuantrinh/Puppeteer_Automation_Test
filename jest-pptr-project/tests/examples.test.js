import HomePage from "../pages/HomePage";
import TopBar from "../pages/components/TopBar";
// import LoginPage from "../pages/LoginPage";

describe("Example Test", () => {
    let homepage;
    let topbar;
    beforeAll(async () => {
        jest.setTimeout(30000);
        homepage = new HomePage();
        topbar = new TopBar();
        //loginPage = new LoginPage();
    });

    it("homepage should work", async () => {
        await homepage.visit();
    }, 10000); // 10s

    it("navbar should be displayed", async () => {
        await homepage.isNavbarDisplayed();
        await topbar.isTopBarDisplayed();
    });

    // it("Try to Login", async () => {
    //     await topbar.clickSignInButton();
    //     await loginPage.isLoginFormDisplayed();
    //     await loginPage.login("username", "password");
    // });
});