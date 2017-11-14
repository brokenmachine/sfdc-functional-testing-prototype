require('console-stamp')(console, { pattern: 'dd/mm/yyyy HH:MM:ss.l' });

var assert = require('assert');
var chatterPage = require('../../pages/lightningChatterPage');

console.log("Running Chatter tests");

describe('Chatter', function () {
    it('should let the user post a question to Chatter', function () {
        var questionText = "How many Lowes would Rob Lowe rob if Rob Lowe could rob Lowes?";
        chatterPage.goto();
        chatterPage.createChatterQuestion(questionText);
        assert(chatterPage.isQuestionPosted(questionText),"Question was not posted successfully")
    })
});
