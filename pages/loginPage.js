var basePage = require('./lightningBasePage');
var profileImageSelector = "img[title='User']";
var logoutLinkSelector = "a.logout";
var profileButtonSelector = "button.oneUserProfileCardTrigger";
var userNameInputSelector = "input#username";
var passwordInputSelector = "input#password";

var loginPage = Object.create(basePage, {

    // required for navigation methods (eg. page.goto())
    url: { get: function() { return '/'; }},

    pageName: { get: function() { return 'Login Page'; }},

    isReady: { value: function() {
        var usernameInputSelector = 'input#username';
        return browser.waitForExist(usernameInputSelector);
    }},

    loginToSalesforce: { value: function(username, password) {
        browser.setValue(userNameInputSelector, username);
        browser.setValue(passwordInputSelector, password);
        browser.click('input#Login');
    }},

    userIsLoggedIn: { value: function() {
        // make sure the user is logged in by checking the if the logout link is there
        browser.waitForExist(profileImageSelector);
        $(profileButtonSelector).click();
        return browser.waitForExist(logoutLinkSelector);
    }}

});

module.exports = loginPage;