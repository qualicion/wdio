class Login {
    get loginPageHeader(){
        return $('div h2');
    }

    getLoginPageHeader(){
        this.loginPageHeader.waitForDisplayed();
        this.loginPageHeader.isDisplayedInViewport();
    }

    get username(){
        return $('#username');
    }

    enterUserName(text){
        this.username.waitForDisplayed();
        this.username.setValue(text);
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