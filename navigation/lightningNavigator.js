var appLauncherLinkSelector = "nav.appLauncher";

var LightningNavigator = function() {
    /**
     * Navigate to a
     * @param  {string} applicationName - Name of the application (Sales, Service, Communities, etc)
     * @param  {string} tabName - Name of the tab with the application (Home, Chatter, Tasks, etc)
     */
    this.navigateTo = function(applicationName, tabName) {
        if (!applicationName) {
            throw "LightningNavigator.navigateTo - must specify the applicationName parameter";
        };

        $(appLauncherLinkSelector).click(); // app launcher
        var appSelector = "div.appTileTitle[title='"+applicationName+"']";
        browser.waitForExist(appSelector);
        $(appSelector).click();

        if (tabName) {
            var tabSelector = "a[title=\'"+tabName+"\']";
            browser.pause(10000); // TODO: I can't seem to find anything to reliably wait on, so doing this for now
            // TODO: for some reason I can't find the link element and click on it like normal, so doing htis
            var tabUrl = browser.getAttribute("nav.slds-context-bar__secondary "+tabSelector, "href");
            browser.url(tabUrl);
        }
    };
};

module.exports = new LightningNavigator();