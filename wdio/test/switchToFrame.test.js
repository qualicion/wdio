const internetPage = require('../../wdio/pages/internet.page');

describe('Switch to iframe', () => {
    it('should switch to iframe',() =>{
        browser.url(`${browser.options.baseUrl}/iframe`);
        internetPage.h3Header.waitForDisplayed();
        internetPage.iFrame.waitForDisplayed();
        browser.switchToFrame(internetPage.iFrame);
        internetPage.sendTextToBody('This is the text in the iFrame');
        assert.equal('This is the text in the iFrame', internetPage.iFrameBody.getText());
    })
})