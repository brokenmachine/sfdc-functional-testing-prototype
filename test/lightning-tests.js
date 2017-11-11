var assert = require('assert');
var loremIpsum = require('lorem-ipsum');

// TODO: put login steps in the setup/teardown or in a base class
describe('Login', function () {
    it('should let the user log in', function () {
        // navigate to the login page and log as in my dummy user
        // TODO: research best way to store this as config
        browser.url('/');
        browser.setValue('input#username', 'stigmatamartyr@icloud.com');
        browser.setValue('input#password', 'thehammer1');
        browser.click('input#Login');

        // click out profile image and check for the "Log Out" link
        var profileImageSelector = "img[title='User']";
        var logoutLinkSelector = "a.logout";
        var profileButtonSelector = "button.oneUserProfileCardTrigger";
        browser.waitForExist(profileImageSelector);
        $(profileButtonSelector).click();
        browser.waitForExist(logoutLinkSelector,5000);
    })
});

describe('Chatter', function () {
    it('should let the user post and delete a Chatter post', function () {
        // navigate to the Chatter app
        var chatterLinkSelector = "a[title='Chatter']";
        var shareAnUpdateDummyButtonSelector = "button.dummyButtonCallToAction";
        var chatterTextEditorSelector = "div.ql-editor[contenteditable='true']";
        var chatterPostActionButtonSelector = "a.cuf-feedItemActionTrigger";
        var confirmPostDeleteModalButtonSelector = "div.forceModalActionContainer button.forceActionButton[title='Delete']";

        // click the "Chatter" link and wait for the "Share an update.." to show up
        $(chatterLinkSelector).click();
        browser.waitForExist(shareAnUpdateDummyButtonSelector);

        // click "Share an update" and wait for the text editor to render and click on it
        $(shareAnUpdateDummyButtonSelector).click();
        browser.waitForExist(chatterTextEditorSelector);
        $(chatterTextEditorSelector).click();

        // type in some lorem ipsum text and submit
        $("div.ql-editor[contenteditable='true'] > p").setValue(loremIpsum());
        $("button.cuf-publisherShareButton").click();

        // now delete the post
        // TODO: this just grabs the first Delete button we see, but really we would want to get some kind of ID back from the submit and store it to check against or find in the DOM
        browser.waitForExist(chatterPostActionButtonSelector);
        $(chatterPostActionButtonSelector).click();
        browser.waitForExist("a[title='Delete']");
        $("a[title='Delete']").click();
        browser.waitForExist(confirmPostDeleteModalButtonSelector);
        $(confirmPostDeleteModalButtonSelector).click();
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