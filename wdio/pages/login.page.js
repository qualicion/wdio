class Login {
    get loginPageHeader(){
        return $('div h2');
    }

    getLoginPageHeader(){
        this.loginPageHeader.waitForDisplayed();
        this.loginPageHeader.isDisplayedInViewport();
    }

    get userName(){
        return $('#username');
    }

    enterUserName(text){
        this.userName.waitForDisplayed();
        this.userName.setValue(text);
    }

    get password(){
        return $('#password')
    }

    enterPassword(text){
        this.password.waitForDisplayed();
        this.password.setValue(text);
    }

    get loginBtn(){
        return $('#login button');
    }

    clickLoginBtn(){
        this.loginBtn.waitForDisplayed();
        this.loginBtn.click();
    }

    get logoutSuccessMessage(){
        return $('#flash');
    }

    getLogoutSuccessMessage(){
        this.logoutSuccessMessage.isDisplayedInViewport();
    }
}
module.exports = new Login();