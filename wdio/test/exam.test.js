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
});

describe('Verify user cannot login with invalid credentials', () => {
    it('Navigate to the login page', () => {
        browser.url(`${browser.options.baseUrl}/login`);
    })

    it('Enter username without password', () => {
        loginPage.enterUserName(loginData.invalid.username);
        assert.equal(loginData.invalid.username, loginPage.username.getValue());
    })

    it('Invalid password message is displayed on clicking login', () => {
        loginPage.clickLoginBtn();
        assert.equal('Your password is invalid!\n×', loginPage.getInvalidLoginMessage());
    })

    it('Enter password only ', () => {
        loginPage.clearUserNameInput();
        loginPage.clearPasswordInput();
        loginPage.enterPassword(loginData.invalid.password);
        assert.equal(loginData.invalid.password, loginPage.password.getValue());
    })

    it('Invalid username message is displayed on clicking login', () => {
        loginPage.clickLoginBtn();
        assert.equal('Your username is invalid!\n×', loginPage.getInvalidLoginMessage());
    })
});