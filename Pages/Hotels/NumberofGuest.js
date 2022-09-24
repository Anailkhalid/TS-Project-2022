const { expect, assert } = require("chai");
const moment = require("moment");
const commands = require("../Pages/_commands")

const now = new moment();
const command = new commands();
class NumberofGuest{

    
travelsButton = '//body/div[@id="app-blossom-flex-ui"]/div[@id="app-layer-manager"]/div[@id="app-layer-base"]/div[1]/div[2]/div[1]/div[1]/section[1]/form[1]/div[1]/div[1]/div[3]/div[1]/div[1]/button[1]'
adultPlus = '//body/div[@id="app-blossom-flex-ui"]/div[@id="app-layer-manager"]/div[@id="app-layer-base"]/div[1]/div[2]/div[1]/div[1]/section[1]/form[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/button[2]/span[1]/*[1]'

childPlus = '//body/div[@id="app-blossom-flex-ui"]/div[@id="app-layer-manager"]/div[@id="app-layer-base"]/div[1]/div[2]/div[1]/div[1]/section[1]/form[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/button[2]/span[1]/*[1]'
child1 = '//select[@id="age-traveler_selector_children_age_selector-0-0"]'
child2 = '//select[@id="age-traveler_selector_children_age_selector-0-1"]'
child3 = '//select[@id="age-traveler_selector_children_age_selector-0-2"]'
child4 = '//select[@id="age-traveler_selector_children_age_selector-0-3"]'
child1option4 = '//select[@id="age-traveler_selector_children_age_selector-0-0"]//option[@value="0"]'
child2option1 = '//select[@id="age-traveler_selector_children_age_selector-0-1"]//option[@value="4"]'
child3option7 = '//select[@id="age-traveler_selector_children_age_selector-0-2"]//option[@value="7"]'
adultNumber = '//input[@id="traveler_selector_adult_step_input-0"]'
childNumber = '//input[@id="traveler_selector_children_step_input-0"]'
travelers = '//body/div[@id="app-blossom-flex-ui"]/div[@id="app-layer-manager"]/div[@id="app-layer-base"]/div[1]/div[2]/div[1]/div[1]/section[1]/form[1]/div[1]/div[1]/div[3]/div[1]/div[1]/button[1]'
doneButton = '//button[@id="traveler_selector_done_button"]'

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
    let text = await command.getTextFunction(this.travelers)
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
    console.log('RIGHT HERE' + text5 + text6);
    return text5 + text6
}

}

module.exports = NumberofGuest