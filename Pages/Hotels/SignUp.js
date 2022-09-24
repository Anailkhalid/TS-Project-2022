const { expect, assert } = require("chai");
const moment = require("moment");
const commands = require("../Pages/_commands")

const now = new moment();
const command = new commands();
class SignUp{

    freeSignUp = '//div[@class="actions"]//a[contains(text(),"Sign up")]'
    emailInputBoxSignUp = '//input[@id="signupFormEmailInput"]'
    firstNameBox = '//input[@id="signupFormFirstNameInput"]'
    lastNameBox = '//input[@id="signupFormLastNameInput"]'
    passwordBox = '//input[@id="signupFormPasswordInput"]'
    emailError = '//div[@id="signupFormEmailInput-error"]'
    firstNameError = '//div[@id="signupFormFirstNameInput-error"]'
    lastNameError = '//div[@id="signupFormLastNameInput-error"]'
    keepMe = '//input[@id="signUpFormRememberMeCheck"]'
    keepMeText = '//label[contains(text(),"Keep me signed in")]'
    continue = '//button[@id="signupFormSubmitButton"]'
    async clickOnSignIn (){
        await command.clickWebElement(this.signInButton)
        await browser.pause(2000)
    }
    async clickOnSignUp (){
        await command.clickWebElement(this.freeSignUp)
    }
    async typeinFirstName (){
        await command.typeInWebElement(this.firstNameBox, '!@%#!%&#')
        await command.clickWebElement(this.emailInputBoxSignUp)
    }
    async typeInLastName (){
        await command.typeInWebElement(this.lastNameBox, '!@%#!%&#')
        await command.clickWebElement(this.firstNameBox)
    }
    async typeInEmail (){
        await command.typeInWebElement(this.emailInputBoxSignUp, '@!@')
        await command.clickWebElement(this.firstNameBox)
    }
    async typeInPassword (){
        await command.typeInWebElement(this.passwordBox, 'Password_08')
    }
    async emailErrorMsg(){
        return await command.getTextFunction(this.emailError) 
    }
    async firstErrorMsg(){
        return await command.getTextFunction(this.firstNameError) 
    }
    async lastErrorMsg(){
        return await command.getTextFunction(this.lastNameError) 
    }
    async keepMeBox (){
        return await command.isElementDisplayed(this.keepMeText)
    }
    async keepMeBox2 (){
        return await command.isWebElementEnabled(this.keepMe)
    }
    async continueBox (){
        return await command.isElementDisplayed(this.continue)
    }
    async continueBox2 (){
        let enabled = await command.isWebElementEnabled(this.continue)
        if (enabled === false ){ enabled = true}
        return enabled
    }

}

module.exports = SignUp;