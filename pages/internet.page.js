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

    link(index) {
        return $(`ul li:nth-child(${index}) a`);
    }

    clickLink(index){
        this.link.waitForDisplayed();
        this.link(indexed).click();
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