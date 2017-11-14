require('console-stamp')(console, { pattern: 'dd/mm/yyyy HH:MM:ss.l' });

var assert = require('assert');
var loginPage = require('../../pages/loginPage');

console.log("Running smoke tests");

describe('Login', function () {
    it('should let the user log in', function () {
        // the user should be already logged in from the before method in wdio.conf.js
        assert(loginPage.userIsLoggedIn(),"User login failed");
    })
});