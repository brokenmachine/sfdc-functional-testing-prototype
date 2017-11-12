var log = require('loglevel');
log.setLevel("info");

var LightningBasePage = function() {
    /**
     * goto a url
     * @return {bool} - if page isLoaded
     */
    this.goto = function() {
        browser.url(this.url);
        return this.loaded();
    };


    /**
     * Return a human-readable page name, to implemented by the the concrete page object
     * @return {string}
     */
    this.pageName = function() {
        return this.pageName;
    };


    /**
     * waits and tests if a page is loaded
     * requires each page object to have a isReady indicating when the page is ready for action
     * @return {bool}
     */
    this.loaded = function() {
        var that = this;
        log.info("Loading "+that.pageName);
        return browser.waitUntil(function() {
            return that.isReady();
        });
    };

    /**
     * switch to a window/tab using an index
     * @param  {int} index - the window's index
     */
    this.switchToWindow = function(index) {
        var windows = browser.windowHandles();
        browser.switchTab(windows.value[index]);
    };
};

module.exports = new LightningBasePage();