require('console-stamp')(console, { pattern: 'dd/mm/yyyy HH:MM:ss.l' });

var assert = require('assert');
var casesListPage = require('../../pages/lightningCaseListPage');
var navigator = require('../../navigation/lightningNavigator');

console.log("Running Cases tests");

describe('Cases', function () {
    it('can view most recent cases from Cases tab', function () {
        navigator.navigateTo("Service","Cases");
        assert(casesListPage.isReady());
    })
});