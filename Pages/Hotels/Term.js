const { expect, assert } = require("chai");
const moment = require("moment");
const commands = require("../Pages/_commands")

const now = new moment();
const command = new commands();
class Term {


terms = '//div[@id="app-layer-base"]//main[@role="main"]/form[@name="signupForm"]//p[@role="presentation"]/a[@href="https://www.hotels.com/customer_care/terms_conditions.html"]'
privacy = '//div[@id="app-layer-base"]//main[@role="main"]/form[@name="signupForm"]//p[@role="presentation"]/a[@href="https://www.hotels.com/customer_care/privacy.html"]'

async clickOnTerms() {
    await command.clickWebElement(this.terms)
    await browser.pause(2000)
}
async clickOnPrivacy(){
    await command.clickWebElement(this.privacy)
    await browser.pause(2000)
}

}

module.exports = Term