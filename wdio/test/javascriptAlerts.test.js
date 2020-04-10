const internetPage = require('../../wdio/pages/internet.page');

describe('Javascript alert', () => {
    it('should get text of alert', () =>{
        browser.url(`${browser.options.baseUrl}/javascript_alerts`);
        internetPage.clickJavascriptAlertButton(1);
        assert.equal('I am a JS Alert', browser.getAlertText());
        console.log(browser.getAlertText());
        browser.pause(3000);
    })

    it('should accept alert', () => {
        browser.acceptAlert();
        assert.equal('You successfuly clicked an alert', internetPage.getResultText());
    })

    it('should dismiss alert', () => {
        internetPage.clickJavascriptAlertButton(2);
        browser.dismissAlert();
        assert.equal('You clicked: Cancel', internetPage.getResultText());
    })

    it('should send text to the alert', () => {
        internetPage.clickJavascriptAlertButton(3);
        browser.sendAlertText('Tunde is a genius'); 
        browser.acceptAlert();
        assert.equal('You entered: Tunde is a genius', internetPage.getResultText());
    })
})