var basePage = require('./lightningBasePage');
var loremIpsum = require('lorem-ipsum');
var shareAnUpdateDummyButtonSelector = "button.dummyButtonCallToAction";
var chatterSaveQuestionButtonSelector = "button.cuf-publisherShareButton.qe-questionPostDesktop";
var chatterQuestionTextAreaSelector = "div.questiontitle textarea.cuf-questionTitleField.textarea";
var chatterQuestionTabLinkSelector = "a.tabHeader[data-tab-name='FeedItem.QuestionPost']";

var lightningChatterPage = Object.create(basePage, {

    // required for navigation methods (eg. page.goto())
    url: { get: function() { return '/one/one.app#/chatter'; }},

    pageName: { get: function() { return 'Chatter Page'; }},

    isReady: { value: function() {
        return browser.waitForExist(shareAnUpdateDummyButtonSelector);
    }},

    createChatterQuestion: { value: function(questionText) {
        if (!questionText) {
            questionText = loremIpsum()+"?";
        }

        // type in the question, details
        browser.waitForExist(chatterQuestionTabLinkSelector);
        $(chatterQuestionTabLinkSelector).click();
        browser.waitForExist(chatterQuestionTextAreaSelector);
        $(chatterQuestionTextAreaSelector).click();
        $(chatterQuestionTextAreaSelector).setValue(questionText);
        $(chatterSaveQuestionButtonSelector).click();
    }},

    isQuestionPosted: { value: function(postText) {
        // TODO: figure how to do this later
        return true;
    }},

});

module.exports = lightningChatterPage;