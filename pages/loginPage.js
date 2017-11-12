var basePage = require('./lightningBasePage');
var loginPage = Object.create(basePage, {

    // required for navigation methods (eg. page.goto())
    url: { get: function() { return '/'; }},

    pageName: { get: function() { return 'Login Page'; }},

    isReady: { value: function() {
        var usernameInputSelector = 'input#username';
        return browser.waitForExist(usernameInputSelector);
    }},

    loginToSalesforce: { value: function(username, password) {
        browser.setValue('input#username', username);
        browser.setValue('input#password', password);
        browser.click('input#Login');
    }},

    userIsLoggedIn: { value: function() {
        var profileImageSelector = "img[title='User']";
        var logoutLinkSelector = "a.logout";
        var profileButtonSelector = "button.oneUserProfileCardTrigger";
        browser.waitForExist(profileImageSelector);
        $(profileButtonSelector).click();
        return browser.waitForExist(logoutLinkSelector,5000);
    }}

});

module.exports = loginPage;