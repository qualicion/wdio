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

    get hereLink(){
        return $('.example a');
    }

    get iFrameBody(){
        return $('#tinymce');
    }

    get iFrame(){
        return $('#mceu_27 #mce_0_ifr');
    }

    get columnA(){
        return $('#column-a');
    }

    get columnB(){
        return $('#column-b');
    }

    get columnAHeader(){
        return $('#column-a header');
    }

    get columnBHeader(){
        return $('#column-b header');
    }

    get draggable(){
        return $('#draggable');
    }

    get droppable(){
        return $('#droppable');
    }

    get droppableParagraph(){
        return $('#droppable p');
    }

    get dropDownMenu(){
        return $('#dropdown');
    }

    get dropDownMenuOption1(){
        return $('#dropdown option:nth-child(2)');
    }

    get dropDownMenuOption2(){
        return $('#dropdown option:nth-child(3)')
    }

    javascriptAlertButton(index){
        return $(`.example li:nth-child(${index}) button`);
    }

    clickJavascriptAlertButton(index){
        this.javascriptAlertButton(index).waitForDisplayed();
        this.javascriptAlertButton(index).click();
    }
    
    clickDropDownMenu(){
        this.dropDownMenu.waitForDisplayed();
        this.dropDownMenu.click();
    }

    clickDropDownMenuOption1(){
        this.dropDownMenuOption1.waitForDisplayed();
        this.dropDownMenuOption1.click();
    }

    clickDropDownMenuOption2(){
        this.dropDownMenuOption2.waitForDisplayed();
        this.dropDownMenuOption2.click();
    }

    draggableToDroppable(){
        this.draggable.waitForDisplayed();
        this.draggable.dragAndDrop(this.droppable);
    }

    dragColumnAToColumnB(){
        this.columnA.waitForDisplayed();
        this.columnA.dragAndDrop(this.columnB);
    }

    sendTextToBody(text){
        this.iFrameBody.waitForDisplayed();
        this.iFrameBody.clearValue();
        this.iFrameBody.click();
        this.iFrameBody.keys(text);
    }
    
    clickHereLink(){
        this.hereLink.waitForDisplayed();
        this.hereLink.click();
    }

    figures(index){
        return $(`.example .figure:nth-child(${index}) img`);
    }

    figureDetails(index){
        return $(`.example .figure:nth-child(${index}) .figcaption h5`);
    }

    get pageFooter(){
        return $('#page-footer')
    }
    
    scrollToPageFooter(){
        this.pageFooter.moveTo();
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

    get enabledButton(){
        return $('#input-example button');
    }

    clickEnableButton(){
        this.enabledButton.waitForDisplayed();
        this.enabledButton.click();
    }

    get inputEnabledField(){
        return $('#input-example input')
    }

    get addElementBtn(){
        return $('.example button');
    }

    clickAddElementBtn(){
        this.addElementBtn.waitForDisplayed();
        this.addElementBtn.click();
    }

    deleteBtn(index){
        return $(`#elements > button:nth-child(${index}`);
    }

    clickDeleteBtn(index){
        this.deleteBtn(index).waitForDisplayed();
        this.deleteBtn(index).click
    }
}
module.exports = new Internet(); 