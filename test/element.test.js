const internetPage = require("../pages/internet.page");

describe("Interacting with elements", function(){
    it("Get text for element", () => {
        browser.url('/');
        let text = $(".heading").getText();
        console.log(text);
        internetPage.getLiText(); 

    })
})