var assert = require('assert');
var chatterPage = require('../../pages/lightningChatterPage');

describe('Chatter', function () {
    it('should let the user post and delete a Chatter post', function () {
        chatterPage.goto();
        chatterPage.createAndDeleteChatterPost();
    })
});

describe('Chatter', function () {
    it('should let the user post a question to Chatter', function () {
        var questionText = "How many Lowes would Rob Lowe rob if Rob Lowe could rob Lowes?";
        chatterPage.createChatterQuestion(questionText);
        assert(chatterPage.isQuestionPosted(questionText),"Question was not posted successfully")
    })
});

/*
NOTES:
- Firefox kept asking about allowing notifications, had to turn that off
- Initially SFDC kept doing the user email verification thing because cookies are not persisted by Selinium runtime, so
  had to use Login IP ranges to stop that
- Had to change mochaOpts timeout in wdio.conf.js as the default timeout overrides whatever you specific in the
  waitForXXX methods if it is long (argh!!!) - https://github.com/webdriverio/webdriverio/issues/1172
- For some reason, I had to do the profileButtonSelector string above and re-use it, as opposed to creating an element
  object and reusing that, when I tried, I would get the error: "An element could not be located on the page using the '
  given search parameters ("button.oneUserProfileCardTrigger") error
*/