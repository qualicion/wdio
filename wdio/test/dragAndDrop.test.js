const internetPage = require('../../wdio/pages/internet.page');

describe('Drag and Drop', () => {
    it.skip('should drag column A to column B', () => {
        browser.url(`${browser.options.baseUrl}/drag_and_drop`);
        internetPage.dragColumnAToColumnB();
        browser.pause(10000);
        assert.equal('A', internetPage.columnBHeader.getText());
    })
     it('should drag and drop', () => {
        browser.url('https://crossbrowsertesting.github.io/drag-and-drop.html');
        internetPage.draggableToDroppable();
        browser.pause(5000);
        assert.equal('Dropped!', internetPage.droppableParagraph.getText());
    })    
}) 