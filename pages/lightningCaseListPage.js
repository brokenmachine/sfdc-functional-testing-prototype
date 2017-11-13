var basePage = require('./lightningBasePage');
var casesIconSelector = "img[title='Cases']";

var casesListPage = Object.create(basePage, {

    // required for navigation methods (eg. page.goto())
    url: { get: function() { return '/one/one.app#/sObject/Case/list?filterName=Recent'; }},

    pageName: { get: function() { return 'Cases List page'; }},

    isReady: { value: function() {
        return browser.waitForExist(casesIconSelector);
    }}

});

module.exports = casesListPage;