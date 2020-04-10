const internetPage = require('../pages/internet.page');

describe('Wait for exist', () => {
    it('open add remove elements page', () => {
        browser.url(`${browser.options.baseUrl}/add_remove_elements/`);
    });

    it('add delete button', () => {
        internetPage.clickAddElementBtn();
    });

    it('should wait until the delete button exists', () => {
        internetPage.deleteBtn(1).waitForExist();
        assert.equal(true, internetPage.deleteBtn(1).isExisting());
    });

    it('should wait for the delete button not to exist', () => {
        internetPage.clickDeleteBtn(1);
        internetPage.deleteBtn(1).waitForExist(500, true);
        assert.equal(false, internetPage.deleteBtn(1).isExisting());
    })
});