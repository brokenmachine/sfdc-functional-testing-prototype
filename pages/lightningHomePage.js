var basePage = require('./lightningBasePage');
var homeTagSelector = "a[title='Home']";

var lightningHomePage = Object.create(basePage, {

    // required for navigation methods (eg. page.goto())
    url: { get: function() { return '/one/one.app#/home'; }},

    pageName: { get: function() { return 'Lightning Home Page'; }},

    isReady: { value: function() {
        return browser.waitForExist(homeTagSelector);
    }}

});

module.exports = lightningHomePage;