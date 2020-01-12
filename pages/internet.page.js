class Internet {
    get pageHeader() {
        return $('h1.heading'); 
    }
    
    get subHeading(){
        return $('h2');
    }

    get h3Header(){
        return $('h3');
    }

    get pageFooter(){
        return $('#page-footer')
    }

    get parent(){
        return $('ul');
    }
    
    get childElements(){
      return this.parent.$$('li');
    }

    get firstLink(){
        return $('ul li:nth-child(1) a');
    }

    get username(){
        return $('#username');
    }

    get password(){
        return $('#password');
    }

    get target(){
        return $('.example #target');
    }   

    get result(){
        return $('.example #result');
    }  

    figures(index){
        return $(`.example .figure:nth-child(${index}) img`);
    }

    figureDetails(index){
        return $(`.example .figure:nth-child(${index}) .figcaption h5`);
    }

    hoverOnFigure(index){
        this.figures(index).waitForDisplayed();
        this.figures(index).moveTo(1,1);
    }

    getFigureDetailsText(index){
        this.figureDetails(index).waitForDisplayed();
        return this.figureDetails(index).getText();
    }

    clickTarget(){
        this.target.waitForDisplayed();
        this.target.click();
    }

    sendKeysToTarget(text){
        this.target.waitForDisplayed();
        this.target.keys(text);
    }

    getResultText(){
        this.result.waitForDisplayed();
        return this.result.getText();
    }

    enterUsername(text){
        this.username.waitForDisplayed();
        this.username.setValue(text);
    }

    enterPassword(text){
        this.password.waitForDisplayed();
        this.password.setValue(text);
    }

    link(index) {
        return $(`ul li:nth-child(${index}) a`);
    }

    clickLink(index){
        this.link(index).waitForDisplayed();
        this.link(index).click();
    }

    checkboxes(index){
        return $(`#checkboxes input:nth-child(${index})`);
    }

    clickCheckbox(index){
        this.checkboxes(index).waitForDisplayed();
        this.checkboxes(index).click();
    }

    getLiText(){
        this.childElements.filter((element) => {
            console.log(element.getText());
        })
    }

    specificChildElement(index){
        return this.parent.$(`li:nth-child(${index})`);
    }

    getSpecificElementText(index){
        this.specificChildElement(index).waitForDisplayed();
       return this.specificChildElement(index).getText();
    }

    clickOnLink(){
        if(this.firstLink.isDisplayed() === true){
            this.firstLink.click();
        }
        this.h3Header.waitForDisplayed();
    }
}
module.exports = new Internet(); 