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

    clearUserNameInput(){
        this.username.clearValue();
    }

    get password(){
        return $('#password')
    }

    enterPassword(text){
        this.password.waitForDisplayed();
        this.password.setValue(text);
    }

    clearPasswordInput(){
        this.password.clearValue();
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

    get invalidLoginMessage(){
        return $('.flash');
    }
    
     getInvalidLoginMessage(){
         this.invalidLoginMessage.waitForDisplayed();
         return this.invalidLoginMessage.getText();
     }
}
module.exports = new Login();