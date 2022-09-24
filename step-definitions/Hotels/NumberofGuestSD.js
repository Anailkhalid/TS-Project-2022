const { Given, Then, When } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const moment = require("moment");
const NumberofGuest = require("../../Pages/Hotels/NumberofGuest");
const Commands = require("../../Pages/Commands");

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

When(/^I Click on Travelers$/, async function () {
    await NumberofGuest.clickTravel()
    await browser.pause(2000)
})
When(/^I Select “Adults" as 6$/, async function () {
    await NumberofGuest.clickAdultPlus()
    await NumberofGuest.clickAdultPlus()
    await NumberofGuest.clickAdultPlus()
    await NumberofGuest.clickAdultPlus()
})
When(/^I Select “Children” as 3$/, async function () {
    await NumberofGuest.clickChildPlus()
    await NumberofGuest.clickChildPlus()
    await NumberofGuest.clickChildPlus()
})
When(/^I Select first child age: 4$/, async function () {
    await NumberofGuest.child1age()
})
When(/^I Select second child age: Under 1$/, async function () {
    await NumberofGuest.child2age()
})
When(/^I Select third child age: 7$/, async function () {
    await NumberofGuest.child3age()
})
When(/^I Click Done$/, async function () {
    await NumberofGuest.clickDone()
})
Then(/^I Verify total number of guests in sum of adults and children as same as selected on step #3 and #4.$/, async function () {
    expect(await NumberofGuest.adultPlusChild(), 'it does not equal 9').to.equal(await proj.travelersText())

})