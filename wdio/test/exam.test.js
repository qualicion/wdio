const loginPage = require('../../wdio/pages/login.page');
const loginData = require('../../data/login-data');
const secureAreaPage = require('../../wdio/pages/secure-area.page');


describe('Verify that user can login and logout successfully', () => {
    it('Navigate to the login page', () => {
        browser.url(`${browser.options.baseUrl}/login`);
    })

    it('Verify user is on the login page', () => {
        loginPage.getLoginPageHeader();
    })

    it('Enter valid username', () => {
        loginPage.enterUserName(loginData.valid.username);
        assert.equal(loginData.valid.username, loginPage.username.getValue());
    })

    it('Enter valid password', () => {
        loginPage.enterPassword(loginData.valid.password);
        assert.equal(loginData.valid.password, loginPage.password.getValue());
    })

    it('User is logged in successfully', () => {
        loginPage.clickLoginBtn();
        secureAreaPage.getLoginSuccessMessage();
        secureAreaPage.getLogoutBtn();
    })

    it('User is able to logout successfully', () => {
        secureAreaPage.clickLogOutBtn();
        loginPage.getLogoutSuccessMessage();
    })
})