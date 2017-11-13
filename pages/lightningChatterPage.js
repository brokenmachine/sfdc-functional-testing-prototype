var basePage = require('./lightningBasePage');
var loremIpsum = require('lorem-ipsum');

var chatterTextEditorSelector = "div.ql-editor[contenteditable='true']";
var chatterPostActionButtonSelector = "a.cuf-feedItemActionTrigger";
var shareAnUpdateDummyButtonSelector = "button.dummyButtonCallToAction";
var chatterSaveButtonSelector = "button.cuf-publisherShareButton.qe-textPostDesktop";
var chatterSaveQuestionButtonSelector = "button.cuf-publisherShareButton.qe-questionPostDesktop";
var confirmPostDeleteModalButtonSelector = "div.forceModalActionContainer button.forceActionButton[title='Delete']";
var deleteChatterPostLinkSelector = "a[title='Delete']";
var chatterQuestionTextAreaSelector = "div.questiontitle textarea.cuf-questionTitleField.textarea";
var chatterQuestionTabLinkSelector = "a.tabHeader[data-tab-name='FeedItem.QuestionPost']";

var lightningChatterPage = Object.create(basePage, {

    // required for navigation methods (eg. page.goto())
    url: { get: function() { return '/one/one.app#/chatter'; }},

    pageName: { get: function() { return 'Chatter Page'; }},

    isReady: { value: function() {
        return browser.waitForExist(shareAnUpdateDummyButtonSelector);
    }},

    createAndDeleteChatterPost: { value: function(postText) {
        if (!postText) {
            postText = loremIpsum();
        }
        // click "Share an update" and type in the text of the Chatter post
        $(shareAnUpdateDummyButtonSelector).click();
        browser.waitForExist(chatterTextEditorSelector);
        $(chatterTextEditorSelector).click();
        $(chatterTextEditorSelector).setValue(postText);
        $(chatterSaveButtonSelector).click();

        // TODO: this just grabs the topmost post, we want to grab the previously saved post ideally
        browser.waitForExist(chatterPostActionButtonSelector);
        $(chatterPostActionButtonSelector).click();
        browser.waitForExist(deleteChatterPostLinkSelector);
        $(deleteChatterPostLinkSelector).click();
        browser.waitForExist(confirmPostDeleteModalButtonSelector);
        $(confirmPostDeleteModalButtonSelector).click();
    }},


    createChatterQuestion: { value: function(questionText,questionDetails) {
        if (!questionText) {
            questionText = loremIpsum()+"?";
        }
        if (!questionDetails) {
            questionDetails = loremIpsum();
        }

        // type in the question, details
        browser.waitForExist(chatterQuestionTabLinkSelector);
        $(chatterQuestionTabLinkSelector).click();
        browser.waitForExist(chatterQuestionTextAreaSelector);
        $(chatterQuestionTextAreaSelector).click();
        $(chatterQuestionTextAreaSelector).setValue(questionText);
        browser.pause(1000);
        $(chatterSaveQuestionButtonSelector).click();
    }},

    isQuestionPosted: { value: function(postText) {
        // TODO: figure how to do this later
        return true;
    }},

});

module.exports = lightningChatterPage;