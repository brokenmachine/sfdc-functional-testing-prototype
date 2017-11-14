var appLauncherLinkSelector = "nav.appLauncher";
var profileImageSelector = "img[title='User']";
var logoutLinkSelector = "a.logout";
var profileButtonSelector = "button.oneUserProfileCardTrigger";
var userNameInputSelector = "input#username";
var homePage = require('../pages/lightningHomePage');

var LightningNavigator = function() {
    /**
     * Navigate to an application and, optionally, a tab within that application
     * @param  {string} applicationName - Name of the application (Sales, Service, Communities, etc)
     * @param  {string} tabName - Name of the tab with the application (Home, Chatter, Tasks, etc)
     */
    this.navigateTo = function(applicationName, tabName) {
        if (!applicationName) {
            throw "LightningNavigator.navigateTo - must specify the applicationName parameter";
        };

        browser.waitForExist(appLauncherLinkSelector);
        $(appLauncherLinkSelector).click(); // app launcher
        var appSelector = "div.appTileTitle[title='"+applicationName+"']";
        browser.waitForExist(appSelector);
        $(appSelector).click();

        if (tabName) {
            var tabSelector = "a[title=\'"+tabName+"\']";
            browser.pause(10000); // TODO: I can't find an element in Lightning to reliably wait on, doing this for now
            var tabUrl = browser.getAttribute("nav.slds-context-bar__secondary "+tabSelector, "href"); // TODO: for some reason I can't find the link element and click on it like normal, so doing this
            browser.url(tabUrl);
        }
    };

    /**
     * Log out of Lightning
     */
    this.logout = function() {
        // make sure the user is logged in by checking the if the logout link is there
        browser.waitForExist(profileImageSelector);
        $(profileButtonSelector).click();
        browser.waitForExist(logoutLinkSelector);
        $(logoutLinkSelector).click();
        browser.waitForExist(userNameInputSelector);
    };

};

module.exports = new LightningNavigator();