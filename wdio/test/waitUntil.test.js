const internetPage = require('../../wdio/pages/internet.page');


describe('Wait until', () => {
    it('should wait until the button text changes to add', () => {
        browser.url(`${browser.options.baseUrl}/dynamic_controls`);
        internetPage.clickPageBtn();
        browser.waitUntil(() => {
            return internetPage.pageButton.getText() === 'Add'
        }, 6000 , 'Expect button text to change')
        assert.equal('Add', internetPage.pageButton.getText());
    })

    it('should wait until the button text changes to remove', () => {
        internetPage.clickPageBtn();
        browser.waitUntil(() => {
            return internetPage.pageButton.getText() === 'Remove'
        }, 6000 , 'Expect button text to change')
        assert.equal('Remove', internetPage.pageButton.getText());
    })
})