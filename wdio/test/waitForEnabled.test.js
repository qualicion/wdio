const internetPage = require('../../wdio/pages/internet.page');

describe('Wait for Enabled', () => {
    it('should wait for the input field to be enabled', () => {
        browser.url(`${browser.options.baseUrl}/dynamic_controls`);
        internetPage.clickEnableButton();
        internetPage.inputEnabledField.waitForEnabled(5000);
        assert.equal(true, internetPage.inputEnabledField.isEnabled());
    })

    it('should wait for the input field to be disabled', () => {
        internetPage.clickEnableButton();
        internetPage.inputEnabledField.waitForEnabled(5000, true);
        assert.equal(false, internetPage.inputEnabledField.isEnabled());
    })
});