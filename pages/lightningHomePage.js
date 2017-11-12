var basePage = require('./lightningBasePage');

var lightningHomePage = Object.create(basePage, {

    // required for navigation methods (eg. page.goto())
    url: { get: function() { return '/one/one.app#/home'; }},


});

module.exports = lightningHomePage;