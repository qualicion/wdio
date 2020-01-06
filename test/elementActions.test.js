internetPage = require("../pages/internet.page");

describe('Test element action', function () {
    it('should click element', () => {
        browser.url('/');
        internetPage.clickOnLink();
        expect(browser.getUrl()).equals('http://the-internet.herokuapp.com/abtest');
    })

    it('it should get text', () => { 
        browser.url('/');
        expect(internetPage.getSpecificElementText(1)).equals('A/B Testing');
    })

    it('should click text box', () => {
        internetPage.clickLink(6);
        internetPage.clickCheckbox(1);
        expect(internetPage.checkbox(1).isSelected()).equals(true);
    })
})


