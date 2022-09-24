const { Given, Then, When } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const moment = require("moment");
const Commands = require("../../Pages/Commands");
const Term = require("../../Pages/Hotels/Term");

const Term = new Term()
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

When(/^I Click “Terms and Conditions” link$/, async function () {
    await Term.clickOnTerms()
})
Then(/^I Verify “Terms and Conditions” page opens in new tab$/, async function () {
    const allHandles = await browser.getWindowHandles();
    expect(allHandles.length, 'new tab did not open').to.equal(2)
})
When(/^I Click “Privacy Statement” link$/, async function () {
    await Term.clickOnPrivacy()
})
Then(/^I Verify “Privacy Statement” page opens in new tab$/, async function () {
    const allHandles = await browser.getWindowHandles();
    expect(allHandles.length, 'new tab did not open').to.equal(3)
})