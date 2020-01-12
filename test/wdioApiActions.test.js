internetPage = require('../pages/internet.page');

describe('WebdriverIO API actions', () => {
    it('should hover on the figure', () => {
        browser.url(`${browser.options.baseUrl}/hovers`);
        internetPage.hoverOnFigure(3);
        assert.equal('name: user1', internetPage.getFigureDetailsText(3));
    })
})
