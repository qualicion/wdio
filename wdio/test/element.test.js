const internetPage = require('../../wdio/pages/internet.page');

describe('Interacting with elements', () => {
    it('Get text for element', () => {
        browser.url('/');
        let text = $('.heading').getText();
        console.log(text);
        internetPage.getLiText(); 
        internetPage.getSpecificElementText(3);
    })

    it('Is footer displayed', () => {
        console.log(internetPage.pageFooter.isDisplayed());
    })

    it('Does header exist?', () => {
        console.log(internetPage.pageHeader.isExisting());
    })

    it('Is footer in viewport?' , () => {
        console.log(internetPage.pageHeader.isDisplayedInViewport());
    })

    it('Is footer in viewport?', () => {
        console.log(internetPage.pageFooter.isDisplayedInViewport());
    })

    it('Is subheader enabled?', () => {
        console.log(internetPage.subHeading.isEnabled());
    })

    it('Click Element', () => {
        internetPage.clickOnLink();
    })
})