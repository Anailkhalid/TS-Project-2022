const { Given, Then, When } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const commands = require("../Pages/commands");
const projs = require("../Pages/Project");
const moment = require("moment");

const proj = new projs()
const command = new commands();
const now = moment();

Given(/^I am on (facebook|hotels|darksky) homepage$/, async function(urlName) {
    switch (urlName.toLowerCase()) {
        case 'facebook':
            await browser.url('/');
            //await browser.setWindowSize(1800, 1200)
            break;
        case 'hotels':
            await browser.url('https://www.hotels.com/');
            await browser.setWindowSize(1800, 1200)
            break;
        case 'darksky':
            await browser.url('https://www.darksky.net/');
            //await browser.setWindowSize(1800, 1200)
            break;    
        default:
            await browser.url('/');
            break;
    }
    })


// TC-17
When(/^I Click on Dates$/, async function () {
    await proj.clickCalender()
})
When(/^I Go to current month if not displayed$/, async function () {
    await proj.goToMonthBackwards('September', '2022')
})
Then(/^I Verify For current month$/, async function () {
    expect(await proj.septemberText(), 'it is not september').to.include(await proj.currentMonth())
})
Then(/^I check Past dates, if any, are disabled.$/, async function () {
    expect(await proj.september2022FromTodayEnabled(-2), 'it is enabled').to.be.false
})
When(/^Back button on current month is disabled$/, async function () {
    expect(await proj.backMonthButtonDisabled(), 'it is enabled').to.be.false
})

// TC-29
When(/^I Click on “List your property”$/, async function () {
    await proj.clickProperty()
})
Then(/^I Verify “What would you like to list” is displayed$/, async function () {
    await proj.switchToTab('Property Info')
    expect(await proj.wouldYouLikeDisplayed(), 'not displayed').to.be.true
})
Then(/^I Verify “Lodging“ and “Private residence“ options are displayed$/, async function () {
    expect(await proj.isPrivateDisplayed() && await proj.isLodgingDisplayed(), 'not displayed').to.be.true
})
When(/^I Click on “Private residence“$/, async function () {
    await proj.clickPrivate()
})
Then(/^I Verify ”Step 1 of 3” is displayed$/, async function () {
    expect(await proj.isStep1Displayed(), 'not displayed').to.be.true
})
Then(/^I Verify “See how much you could earn!” is displayed$/, async function () {
    expect(await proj.isEarnDisplayed(), 'not displayed').to.be.true
})
When(/^I Enter “4“ as bedroom$/, async function () {
    await proj.clickBedroom()
    await proj.clickBedroom()
    await proj.clickBedroom()
    await proj.clickBedroom()
})
When(/^I Enter “2.5“ as bathroom$/, async function () {
    await proj.clickBathroom()
    await proj.clickBathroom()
    await proj.clickBathroom()
})
When(/^I Click on “Next” button$/, async function () {
    await proj.clickNext()
})
Then(/^I Verify ”Step 2 of 3” is displayed$/, async function () {
    expect(await proj.isStep2Displayed(), 'not displayed').to.be.true
})
Then(/^I Verify “Where is your property located” is displayed$/, async function () {
    expect(await proj.isPropertyDisplayed(), 'not displayed').to.be.true
})
When(/^I enter “121” in address$/, async function () {
    await proj.enterAddressText()
})
When(/^Select “1211 6th Avenue, New York, NY, USA” from auto-suggestion$/, async function () {
    await browser.pause(2000)
    await proj.intoGoingToAddress('1211 6th Avenue, New York, NY, USA')
    await browser.pause(20000)
})
Then(/^I Verify graph is displayed$/, async function () {
    expect(await proj.isMapDisplayed(), 'not displayed').to.be.true
})
Then(/^I Verify pin in graph is displayed$/, async function () {
    expect(await proj.isPinInGraphDisplayed(), 'not displayed').to.be.true
})
Then(/^I Verify “Pin location may not be exact.“ is displayed below graph$/, async function () {
    expect(await proj.isPinUnder(), 'not displayed').to.be.true
})

// TC-30
When(/^I Scroll to “Get the app“ button$/, async function () {
    await proj.scrollToApp()
})
When(/^I Enter “0000000000” in Phone number$/, async function () {
    await proj.phoneNumberText()
})
When(/^I Click on “Get the app“ button$/, async function () {
    await proj.clickOnApp()
})
Then(/^I Verify “Please enter a valid phone number.“ error is displayed$/, async function () {
    expect(await proj.phoneError(), 'not disabled').to.include('Please enter a valid phone number')
})

// TC-23
When(/^I Search Manhattan, NY$/, async function () {
    await proj.typingDestination('Manhattan, NY')
    await browser.pause(2000)
    await proj.intoGoingToField('Manhattan')
})
When(/^I Enter Check-in date as Jan-10-2023$/, async function () {
    await proj.clickDates()
    await browser.pause(2000)
    await proj.goToMonth('January', '2023')
    await proj.jan2022(10)
})
When(/^I Enter Check-in date as Jan-23-2023$/, async function () {
    await proj.jan2022(23)
})
When(/^I Click on Search button$/, async function () {
    await proj.clickSearch()
})
When(/^I Click on 5 from star-rating filter$/, async function () {
    await proj.clickOn5Star()
})
When(/^I Select “Price” from sort-by dropdown$/, async function () {
    await proj.clickOnPrice()
})
                                
Then(/^I Verify all hotels in search results are 5-rated as selected in above step$/, async function () {
    expect(await proj.starsArray(), 'not 5 star').to.be.true
})
Then(/^I Verify all hotels are listed in increasing order of price.$/, async function () {
    expect(await proj.pricesArray(), 'it is going in decending order').to.be.true
})

// TC-19
When(/^I Enter “bora” in destination$/, async function () {
    await proj.typingDestination('bora')
})
When(/^I Select “Bora Bora, Leeward Islands, French Polynesia” from auto suggestion$/, async function () {
    await browser.pause(2000)
    await proj.intoGoingToField('bora bora')
})
When(/^I Select December 1, 2022 as Check-in$/, async function () {
    await proj.clickDates()
    await proj.goToMonth('December', '2022')
    await proj.december2022(1)
})
When(/^I Select December 10, 2022 as Check-out$/, async function () {
    await proj.december2022(10)
})
When(/^I Click Apply$/, async function () {
    await proj.clickApply()
})
When(/^I Click on “Search” button$/, async function () {
    await proj.clickSearch()
})
Then(/^I Verify at the end of search results: Text: Tell us how we can improve our site is displayed$/, async function () {
    expect(await proj.tellUsHowDisplayed(), 'not disabled').to.be.true
})
Then(/^Button Share feedback is displayed and enabled$/, async function () {
    expect(await proj.feedbackDisplayed(), 'not disabled').to.be.true
})

// TC-31
When(/^I Click on “English“ language$/, async function () {
    await proj.selectEnglish()
    await browser.pause(2000)
})
When(/^I Select “Español Estados Unidos” in Language dropdown$/, async function () {
    await proj.selectLang()
    await browser.pause(2000)
    await proj.selectSpanish()
})
When(/^I Click on “Save“ button$/, async function () {
    await proj.saveLang()
    await browser.pause(2000)
})
Then(/^I Verify “Español” is displayed$/, async function () {
    expect(await proj.spanishText(), 'not disabled').to.include('Español')
})
When(/^I Click on “Español“ language$/, async function () {
    await proj.selectEspanol()
    await browser.pause(2000)
})
When(/^I Select “English United States” in Language dropdown$/, async function () {
    await proj.selectLang()
    await browser.pause(2000)
    await proj.englishLang()
    await browser.pause(2000)
})
When(/^I Click on “Guardar“ button$/, async function () {
    await proj.spanishSaveLang()
    await browser.pause(2000)
})
Then(/^I Verify “English” is displayed$/, async function () {
    expect(await proj.englishDisplay(), 'not disabled').to.include('English')
})