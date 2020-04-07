const internetPage = require('../pages/internet.page');

describe('Dropdown Menu', () => {
    it('should select option 1', () => {
        browser.url(`${browser.options.baseUrl}/dropdown`);
        internetPage.clickDropDownMenu();
        internetPage.clickDropDownMenuOption1();
        assert.equal(true, internetPage.dropDownMenuOption1.isSelected());
    })

    it('should select option 2', () => {
        internetPage.clickDropDownMenu();
        internetPage.clickDropDownMenuOption2();
        browser.pause(3000);
        assert.equal(true, internetPage.dropDownMenuOption2.isSelected());
    })
})