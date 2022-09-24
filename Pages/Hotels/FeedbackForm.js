const Commands = require("../Commands");

class FeedbackForm {

    feedBackButtonLocator = By.xpath("//div[contains(text(),'Feedback')]");
    submitBtnLocator = By.xpath("//*[@id='submit-button']");
    emptyFormSubmissionErrorLocator = By.xpath("//*[@id='required']");
    redDottedBorderLocator = By.xpath("//*[contains(@style,'2px dotted rgb')]");

    commands = new Commands;


    async clickFeedback(){
        clickIt(feedBackButtonLocator);
    }
    async clickFormSubmitBtn() {
        clickIt(submitBtnLocator);
    }

    async isEmptyFormSubmissionErrorDisplayed() {
        return isElementDisplayed(emptyFormSubmissionErrorLocator);
    }

    async isRedDottedBorderDisplayed() {
        return isElementDisplayed(redDottedBorderLocator);
        }


}

module.exports = FeedbackForm;