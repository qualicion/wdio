const internetPage = require('../pages/internet.page');

describe('Wait for Enabled', () => {
    it('should wait for the input field to be enabled', () => {
        browser.url(`${browser.options.baseUrl}/dynamic_controls`);
        internetPage.clickEnableButton();
        internetPage.inputEnabledField.waitForEnabled(4000);
        assert.equal(true, internetPage.inputEnabledField.isEnabled());
    })

    it('should wait for the input field to be disabled', () => {
        internetPage.clickEnableButton();
        internetPage.inputEnabledField.waitForEnabled(4000, true);
        browser.debug();
        assert.equal(true, internetPage.inputEnabledField.isEnabled());
    })
});