class SecureAreaPage {
    get loginSuccessMessage(){
        return $('#flash');
    }

    getLoginSuccessMessage(){
        this.loginSuccessMessage.isDisplayedInViewport();
    }

    get logoutBtn(){
        return $('#content div a')
    }

    getLogoutBtn(){
        this.logoutBtn.isDisplayedInViewport();
    }

    clickLogOutBtn(){
        this.logoutBtn.waitForDisplayed();
        this.logoutBtn.click();
    }
}
module.exports = new SecureAreaPage();