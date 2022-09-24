const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const FeedbackForm = require("../../Pages/Hotels/FeedbackForm");
const FeedbackForm = require("../../Pages/Hotels/FeedbackForm");
const FeedbackForm = new FeedbackForm();


Given(/^I am on (facebook|hotels|darksky) homepage$/, async function(urlName) {
    switch (urlName.toLowerCase()) {
        case 'facebook':
            await browser.url('/');
            break;
        case 'hotels':
            await browser.url('https://www.hotels.com/');
            break;
        case 'darksky':
            await browser.url('https://www.darksky.net/');
            break;    
        default:
            await browser.url('/');
            break;
    }
});

When (/^I click on feedback link/, async function() {
    const FeedbackForm = new FeedbackForm();
    expect(FeedbackForm.clickFeedback(), 'click on feedback is NOT enabled').to.be.true;

});

When(/^I click on feedback submit button/, async function() {
    const FeedbackForm = new FeedbackForm();
    expect(FeedbackForm.clickFormSubmitBtn(), 'NOT enabled').to.be.true;
    
});

Then(/^I verify empty form submission error is displayed/, async function() {
    const FeedbackForm = new FeedbackForm();
    expect(FeedbackForm.isEmptyFormSubmissionErrorDisplayed(),'Test Failed - Error is not displayed').to.be.true;
    
});

Then(/^I verify red dotted border around star rating section/, async function() {
        expect(FeedbackForm.isRedDottedBorderDisplayed(),'Test Failed - Red dotted border is not displayed').to.be.true;
        MyDriver.getDriver().quit();

});