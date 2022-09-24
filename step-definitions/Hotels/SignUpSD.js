const { Given, Then, When } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const moment = require("moment");
const NumberofGuest = require("../../Pages/Hotels/NumberofGuest");
const Commands = require("../../Pages/Commands");
const SignUp = require("../../Pages/Hotels/SignUp");

const NumberofGuest = new NumberofGuest()
const command = new Commands();
const now = moment();

Given(/^I am on (facebook|hotels|darksky) homepage$/, async function(urlName) {
    switch (urlName.toLowerCase()) {
        case 'facebook':
            await browser.url('/');

            break;
        case 'hotels':
            await browser.url('https://www.hotels.com/');
            await browser.setWindowSize(1800, 1200)
            break;
        case 'darksky':
            await browser.url('https://www.darksky.net/');
            
            break;    
        default:
            await browser.url('/');
            break;
    }
    })

When(/^I Click on Signin link$/, async function () {
    await SignUp.clickOnSignIn()
})
When(/^I Click on SignUp link$/, async function () {
    await SignUp.clickOnSignUp()
})
When(/^Enter invalid email address with at least '@' symbol$/, async function () {
    await SignUp.typeInEmail()
})
Then(/^-> Verify error is displayed 'Enter a valid email address'$/, async function () {
    expect(await SignUp.emailErrorMsg(), 'error is not displayed').to.include('Enter a valid email address')
})
When(/^Enter invalid first name$/, async function () {
    await SignUp.typeinFirstName()
})
Then(/^-> Verify error is displayed 'First name cannot contain special characters'$/, async function () {
    expect(await SignUp.firstErrorMsg(), 'error is not displayed').to.include('First name cannot contain special characters')
})
When(/^Enter invalid last name$/, async function () {
    await SignUp.typeInLastName()
})
Then(/^-> Verify error is displayed 'Last name cannot contain special characters'$/, async function () {
    expect(await SignUp.lastErrorMsg(), 'error is not displayed').to.include('Last name cannot contain special characters')
})
When(/^I Enter password$/, async function () {
    await SignUp.typeInPassword()
})
Then(/^Verify “Keep me signed in” checkbox is displayed and enabled$/, async function () {
    expect(await SignUp.keepMeBox() && await SignUp.keepMeBox2(), 'error is not displayed').to.be.true
})
Then(/^Verify “Continue” button is displayed but NOT enabled$/, async function () {
    expect(await SignUp.continueBox() && await SignUp.continueBox2(), 'error is not displayed').to.be.true
})