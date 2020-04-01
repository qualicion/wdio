const internetPage = require('../pages/internet.page');

describe('WebdriverIO API actions', () => {
    it('should hover on the figure 1', () => {
        browser.url(`${browser.options.baseUrl}/hovers`);
        internetPage.hoverOnFigure(3);
        assert.equal('name: user1', internetPage.getFigureDetailsText(3));
    })

    it('should hover on the figure 2', () => {
        browser.url(`${browser.options.baseUrl}/hovers`);
        internetPage.hoverOnFigure(4);
        assert.equal('name: user2', internetPage.getFigureDetailsText(4));
    })

    it('should hover on the figure 3', () => {
        browser.url(`${browser.options.baseUrl}/hovers`);
        internetPage.hoverOnFigure(5);
        assert.equal('name: user3', internetPage.getFigureDetailsText(5));
    })

    it('should send keyboard value BACKSPACE', () => {
        browser.url(`${browser.options.baseUrl}/key_presses`);
        internetPage.clickTarget();
        internetPage.sendKeysToTarget('Backspace');
        assert.equal('You entered: BACK_SPACE', internetPage.getResultText());
    })

    it('should send keyboard value SHIFT', () => {
        browser.url(`${browser.options.baseUrl}/key_presses`);
        internetPage.clickTarget();
        internetPage.sendKeysToTarget('Shift');
        assert.equal('You entered: SHIFT', internetPage.getResultText());
    })

    it('should send keyboard value TAB', () => {
        browser.url(`${browser.options.baseUrl}/key_presses`);
        internetPage.clickTarget();
        internetPage.sendKeysToTarget('Tab');
        assert.equal('You entered: TAB', internetPage.getResultText());
    })
})