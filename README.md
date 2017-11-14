# Salesforce functional testing prototype with WebdriverIO


NOTES:
----------------------------
- Firefox kept asking about allowing notifications, had to turn that off
- Initially SFDC kept doing the user email verification thing because cookies are not persisted by Selinium runtime, so
  had to use Login IP ranges to stop that
- Had to change mochaOpts timeout in wdio.conf.js as the default timeout overrides whatever you specific in the
  waitForXXX methods if it is long (argh!!!) - https://github.com/webdriverio/webdriverio/issues/1172
- For some reason, I had to do the profileButtonSelector string above and re-use it, as opposed to creating an element
  object and reusing that, when I tried, I would get the error: "An element could not be located on the page using the '
  given search parameters ("button.oneUserProfileCardTrigger") error


Findings, Caveats and Areas for Exploration:
--------------------------------------------
- Selenium IDE supports recording scripts, but it only works in old version of FF and seems to be dying.  General consensus is that recording doesn't work and you need to write scripts by hand carefully, with knowledge of the UI framework.
- Lightning and Classic are basically two different apps that would require two different testing apps.  Classic is a a lot more straightforward to write test against because it's mostly static HTML that doesn't use a UI framework.
- The basic WebDriver API (that is available in Java, .NET, PHP, etc.) is very basic and harder to use compared to WebDriverIO.
- In Lightning, need to determine most reliable way to interact with the pages.  We don't have access to the native Aura framework (maybe there's a way?) and timing and DOM interaction can be unreliable.
- In terms of a general-purpose testing framework, it makes sense to me that would define a basic of interactions (e.g. create Opportunity, create Chatter Post, etc).  that projects can base their testing apps off of
- Need to define what a "workflow" class would look like, e.g. a particular test that spans a number of a pages and needs to maintain state and clean up after itself