class Internet {
    get pageHeader() {
        return $('h1.heading'); 
    }
    get subHeading(){
        return $('h2');
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

    getLiText(){
        this.childElements.filter((element) => {
            console.log(element.getText());
        })
    }

    specificChildElement(index){
        return this.parent.$(`li:nth-child(${index})`);
    }

    getSpecificElementText(index){
       console.log(this.specificChildElement(index).getText());
    }
}
module.exports = new Internet(); 