const { expect, assert } = require("chai");
const moment = require("moment");
const commands = require("../Pages/commands")

const now = new moment();
const command = new commands();
class project{

 

//TC-25
fiveStar = '//label[@for="page-rating-5"]'
commentBox = '//textarea[@id="verbatim"]'
likelyReturn = '//select[@id="will-you-return"]'
highlyLikely ='//option[contains(text(),"Highly likely")]'
bookedNo = '//span[@data-localization="booked-before-no"]'
accomplishedYes = '//label[@for="were-you-successful-yes"]'
entireThankYou = '//div[@id="container"]'

//TC 28
multipleChildren = '//div[@class="uitk-layout-flex uitk-layout-flex-flex-wrap-wrap"]'
childMinus = '[aria-label="Decrease the number of children in room 1"]'

//TC-17
backMonthButton = '[aria-label="Previous month"]'
september = '//h2[contains(text(),"September")]'
calenderButton = '//button[@id="date_form_field-btn"]'

//TC-19
tellUsHow = '//span[contains(text(),"Tell")]'
hittingApply = '//button[@data-stid="apply-date-picker"]'
hittingSearch = '//button[@id="submit_button"]'
feedBack = '//a[contains(text(),"Share feedback")]'
goingToLocator = "[aria-label='Going to']";
dates = '//button[@id="date_form_field-btn"]'
clickNextMonth = '[aria-label="Next month"]'

// TC-29
property = '//div[contains(text(),"List your property")]'
wouldYouLike = '//p[contains(text(),"What would you like to list?")]'
lodging = '//p[contains(text(),"Lodging")]'
private = '//p[contains(text(),"Private residence")]'
step1of3 = '//div[contains(text(),"Step 1 of 3")]'
step2of3 = '//div[contains(text(),"Step 2 of 3")]'
step3of3 = '//div[contains(text(),"Step 3 of 3")]'
earn = '//h1[contains(text(),"See how much you could earn!")]'
plusBedroom = '//button[@aria-label="Increase bedrooms"]'
plusBathroom= '//button[@aria-label="Increase bathrooms"]'
nextButton ='//button[@id="propertyInfoNextBtn"]'
propertyLocated = '//h1[contains(text(),"Where is your property located?")]'
enterAddress = '//input[@id="locationTypeAhead"]'
graph = '//div[@data-wdio="google-map-component"]'
pinInGraph = '//body/form[1]/div[1]/div[1]/div[2]/div[2]/div[2]/section[1]/div[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[4]/div[2]'
pinUnder = '//span[contains(text(),"Move the pin to adjust the location of your proper")]'
insideTheAuto = '//ul[@class="typeahead-prediction-list fds-field-select"]'

// TC-30
getTheApp = '//button[@id="submitBtn"]'
phoneNumber = '//input[@id="phoneNumber"]'
errorMessageApp = '//div[@id="phoneNumber-error"]'

// TC -23
star5 = '//span[contains(text(),"5★")]'
sortBy = '//select[@id="sort"]'
optionPrice ='//option[@value="PRICE_LOW_TO_HIGH"]'
firstStarRating = '//body/div[@id="app-shopping-pwa"]/div[@id="app-layer-manager"]/div[@id="app-layer-base"]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[2]/div[1]/div[2]/section[2]/ol[1]/li[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]'
secondStarRating = '//body/div[@id="app-shopping-pwa"]/div[@id="app-layer-manager"]/div[@id="app-layer-base"]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[2]/div[1]/div[2]/section[2]/ol[1]/li[3]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]'
thirdStarRating ='//body/div[@id="app-shopping-pwa"]/div[@id="app-layer-manager"]/div[@id="app-layer-base"]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[2]/div[1]/div[2]/section[2]/ol[1]/li[4]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]'
allPrices = '//div[@class="uitk-text uitk-type-600 uitk-type-bold uitk-text-emphasis-theme"]'
allStar = '//div[@class="uitk-rating"]'

//TC -31
englishButton ='//div[contains(text(),"English")]'
langBox = '//select[@id="language-selector"]'
spanishOption = '//option[contains(text(),"Español (Estados Unidos)")]'
saveButton ='//button[contains(text(),"Save")]'
espanol = '//div[contains(text(),"Español")]'
englishOption =  '//option[contains(text(),"English (United States)")]'
spanishSave = "//button[contains(text(),'Guardar')]"
async clickTravel(){
    await command.clickWebElement(this.travelsButton)
} 
async clickAdultPlus(){
    await command.clickWebElement(this.adultPlus)
}
async clickChildPlus(){
    await command.clickWebElement(this.childPlus)
}
async child1age(){
    await command.clickWebElement(this.child1)
    await command.clickWebElement(this.child1option4)
}
async child2age(){
    await command.clickWebElement(this.child2)
    await command.clickWebElement(this.child2option1)
}
async child3age(){
    await command.clickWebElement(this.child3)
    await command.clickWebElement(this.child3option7)
}
async clickDone (){
    await command.clickWebElement(this.doneButton)
}
async travelersText (){
    let text = await command.getTextFunction(this.travelsButton)
    console.log('RIGHT HERE' + text);
    let index = text.search(/[0-9]/);
    let firstNum = Number(text[index]);
    return firstNum;
}
async adultPlusChild (){
    let text = await command.findWebElement(this.adultNumber)
    let text2 = await command.findWebElement(this.childNumber)
    let text3 = await text.getAttribute('value')
    let text4 = await text2.getAttribute('value')
    let text5 = parseInt(text3)
    let text6 = parseInt(text4)
    return text5 + text6
}

//TC-25
async fiveStarReview (){
    await command.clickWebElement(this.fiveStar)
}
async commentBoxText (){
    await command.typeInWebElement(this.commentBox, 'Hi, I really like this website')
}
async highlyLikelyReturn (){
    await command.clickWebElement(this.likelyReturn)
    await command.clickWebElement(this.highlyLikely)
}
async booking (){
    await command.clickWebElement(this.bookedNo)
}
async accomplish (){
    await command.clickWebElement(this.accomplishedYes)
}
async entireThankYouText (){
    return await command.getTextFunction(this.entireThankYou)
}

// TC-28

async dropDownChildren (){
        let Array = []
        let i = 0;
        let timeline =  await $$(this.multipleChildren)
        for (const time of timeline){
            Array[i] = await time.getText()
            i++;
       }
       let Arraylength = Array.length
       return Arraylength
    }
async plusEnabled (){
    return await command.isWebElementEnabled(this.childPlus)
}
async plusDisplayed (){
    return await command.isWebElementEnabled(this.childPlus)
}
async minusEnabled (){
    return await command.isWebElementEnabled(this.childMinus)
}
async minusDisabled (){
    let disabled = await command.isWebElementEnabled(this.childMinus)
    if (disabled === true )
    return disabled = false
}
async clickChildMinus(){
    await command.clickWebElement(this.childMinus)
}
async dropDownDisplayed(){
    return await command.isElementDisplayed(this.child1)
}

//TC-17
async clickCalender (){
    await command.clickWebElement(this.calenderButton)
}
async currentMonth (){
    return now.format('MMMM')
}
async septemberText(){
    return await command.getTextFunction(this.september)
}
async goToMonthBackwards(month, year){
    while(await command.isElementDisplayed('//h2[text()="'+month+' '+year+'"]') == false){
        await command.clickWebElement(this.backMonthButton)
    }
}
async backMonthButtonDisabled(){
    return await command.isWebElementEnabled(this.backMonthButton)
}
async september2022FromTodayEnabled(data) {
    await $$(
      '//h2[text()="September 2022"]/following-sibling::table//button[not(@disabled)]'
    );
    let newNumber = now.date() + data;
    let enabled = await $("//button[@data-day=" + newNumber + "]");
    return enabled.isEnabled();
  }
 
  //TC-19
  
async typingDestination(text) {
    await command.clickWebElement(this.goingToLocator)
    let textInDestination = await $("#destination_form_field");
    return await textInDestination.setValue(text);
  }
  async intoGoingToField(text) {
    const autoSuggestionElements = await $$("//div[@class='truncate']");
    for (const autoSuggestionElement of autoSuggestionElements) {
      const suggestionText = await autoSuggestionElement.getText();
      if (
        suggestionText.toLowerCase().localeCompare(text.toLowerCase()) === 0
      ) {
        await autoSuggestionElement.click();
        break
      }
    }
  }
  async goToMonth(month, year){
    while(await command.isElementDisplayed('//h2[text()="'+month+' '+year+'"]') == false){
        await command.clickWebElement(this.clickNextMonth)
    }
}
  async december2022(data) {
    const allSepDateElements = await $$(
      '//h2[text()="December 2022"]/following-sibling::table//button[not(@disabled)]'
    );
    for (const dateElement of allSepDateElements) {
      const date = await dateElement.getAttribute("data-day");
      if (date.localeCompare(data) === 0) {
        await dateElement.click();
        break;
      }
    }
  }
  async clickApply(){
    await command.clickWebElement(this.hittingApply)
  }
  async clickDates(){
    await command.clickWebElement(this.dates)
  }
  async clickSearch(){
    await command.clickWebElement(this.hittingSearch)
  }
  async tellUsHowDisplayed(){
    await command.scrollIntoViews(this.feedBack)
    return await command.isElementDisplayed(this.tellUsHow)
  }
  async feedbackDisplayed(){
    if (await command.isWebElementEnabled(this.feedBack) === true)
    {
    return await command.isElementDisplayed(this.feedBack)}
  }

  //TC-29
async clickProperty(){
    await command.clickWebElement(this.property)
}
async wouldYouLikeDisplayed(){
    return await command.isElementDisplayed(this.wouldYouLike)
}
async isPrivateDisplayed(){
    return await command.isElementDisplayed(this.private)
}
async isLodgingDisplayed(){
    return await command.isElementDisplayed(this.lodging)
}
async clickPrivate(){
    await command.clickWebElement(this.private)
}
async isStep1Displayed(){
    return await command.isElementDisplayed(this.step1of3)
}
async isStep2Displayed(){
    return await command.isElementDisplayed(this.step2of3)
}
async isStep3Displayed(){
    return await command.isElementDisplayed(this.step3of3)
}
async isEarnDisplayed(){
    return await command.isElementDisplayed(this.earn)
}
async clickBedroom(){
    await command.clickWebElement(this.plusBedroom)
}
async clickBathroom(){
    await command.clickWebElement(this.plusBathroom)
}
async clickNext(){
    await command.clickWebElement(this.nextButton)
}
async isPropertyDisplayed(){
    await command.clickWebElement(this.propertyLocated)
    return await command.isElementDisplayed(this.propertyLocated)
}
async enterAddressText(){
    await command.clickWebElement(this.enterAddress)
    await command.typeInWebElement(this.enterAddress, 121)
}
async intoGoingToAddress(text) {
    const autoSuggestionElements = await $$('//li[@class="typeahead-prediction-item fds-list-item"]');
    for (const autoSuggestionElement of autoSuggestionElements) {
      const suggestionText = await autoSuggestionElement.getText();
      if (
        suggestionText.toLowerCase().localeCompare(text.toLowerCase()) === 0
      ) {
        await autoSuggestionElement.click();
        break
      }
    }
  }
  async isMapDisplayed(){
    return await command.isElementDisplayed(this.graph)
}
async sixthAvenue(){
    return await command.isElementVisable(this.insideTheAuto, '1211 6th Avenue, New York, NY, USA')
    
}
async isPinInGraphDisplayed(){
    return await command.isElementDisplayed(this.pinInGraph)
}
async isPinUnder(){
    return await command.isElementDisplayed(this.pinUnder)
}

//TC-30
async scrollToApp(){
    return await command.scrollIntoViews(this.getTheApp)
}
async phoneNumberText(){
    await command.typeInWebElement(this.phoneNumber, '0000000000')
}
async clickOnApp(){
    await command.clickWebElement(this.getTheApp)
}
async phoneError(){
    return await command.getTextFunction(this.errorMessageApp)
}

//TC-23
async jan2022(data) {
    const allSepDateElements = await $$(
      '//h2[text()="January 2023"]/following-sibling::table//button[not(@disabled)]'
    );
    for (const dateElement of allSepDateElements) {
      const date = await dateElement.getAttribute("data-day");
      if (date.localeCompare(data) === 0) {
        await dateElement.click();
        break;
      }
    }
  }
async pricesArray(){
    let Array = []
    let i = 0;
    let prices =  await $$(this.allPrices)
    for (const price of prices){
        let newArray = await price.getText()
        let newestArray = newArray.substring(1)
        Array[i] = parseInt(newestArray)
        i++;
        for (let t = 0; t < Array.length-2; t++){
            if(!(Array[t+1] - Array[i] >= 0)){
            } else {
                return false
            }
        }
   } return true
}
async clickOn5Star(){
    await command.scrollIntoViews(this.star5)
    await command.clickWebElement(this.star5)
}
async clickOnPrice(){
    await command.clickWebElement(this.sortBy)
    await command.clickWebElement(this.optionPrice)
}
async oneStarRating (){
    return await command.getTextFunction(this.firstStarRating)
}
async twoStarRating (){
    return await command.getTextFunction(this.secondStarRating)
}
async threeStarRating (){
    return await command.getTextFunction(this.thirdStarRating)
}
async isBelowThreshold(currentValue) { currentValue = 5}
async starsArray(){
    let Array = []
    let i = 0;
    let stars =  await $$(this.allStar)
    for (const star of stars){
        let newArray = await star.getText()
        let newestArray = newArray.substring(0,1)
        Array[i] = parseInt(newestArray)
        i++;
        
   } 
}
async firstPriceText(){
    let text = await command.getTextFunction(this.firstPrice)
    let newText = text.slice(1,100)
    return parseInt(newText)
}

async lastPriceText(){
    await command.scrollIntoViews(this.lastPrice)
    let text = await command.getTextFunction(this.lastPrice)
    let newText = text.slice(1,100)
    return parseInt(newText)
}

//TC-31
async selectEnglish (){
    await command.clickWebElement(this.englishButton)
}
async selectLang (){
    await command.clickWebElement(this.langBox)
}
async selectSpanish(){
    await command.clickWebElement(this.spanishOption)
}
async saveLang (){
    await command.clickWebElement(this.saveButton)
}
async spanishText(){
    return await command.getTextFunction(this.espanol)
}
async selectEspanol(){
    await command.clickWebElement(this.espanol)
}
async englishLang (){
    await command.clickWebElement(this.englishOption)
}
async spanishSaveLang (){
    await command.clickWebElement(this.spanishSave)
}
async englishDisplay(){
    return command.getTextFunction(this.englishButton)
}
}




module.exports = project
