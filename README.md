# Salesforce functional testing prototype with WebdriverIO


NOTES:
- Firefox kept asking about allowing notifications, had to turn that off
- Initially SFDC kept doing the user email verification thing because cookies are not persisted by Selinium runtime, so
  had to use Login IP ranges to stop that
- Had to change mochaOpts timeout in wdio.conf.js as the default timeout overrides whatever you specific in the
  waitForXXX methods if it is long (argh!!!) - https://github.com/webdriverio/webdriverio/issues/1172
- For some reason, I had to do the profileButtonSelector string above and re-use it, as opposed to creating an element
  object and reusing that, when I tried, I would get the error: "An element could not be located on the page using the '
  given search parameters ("button.oneUserProfileCardTrigger") error