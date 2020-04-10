const internetPage = require('../../wdio/pages/internet.page');

describe('Scroll to element',() => {
    it('should scroll to the footer', () => {
        browser.url('/');
        internetPage.pageHeader.waitForDisplayed();
        internetPage.scrollToPageFooter();
        assert.equal(true, internetPage.pageFooter.isDisplayedInViewport());
    })

    it('should scroll into view', () => {
        internetPage.pageFooter.scrollIntoView();
        assert.equal(true, internetPage.pageFooter.isDisplayedInViewport());
    })
})