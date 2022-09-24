const Commands = require("../Commands");


class SignInPage {


    signInLocator = By.xpath("//button[contains(text(),'Sign in')]");
    emailInputLocator = By.xpath("//*[@id='loginFormEmailInput']");
    passwordInputLocator = By.xpath("//*[@id='loginFormPasswordInput']");
    loginCheckboxLocator = By.xpath("//input[@type='checkbox']");
    loginBtnLocator = By.xpath("//*[@id='loginFormSubmitButton']");
    signInErrorMessageLocator = By.xpath("//*[@id='loginFormErrorBanner']");

    commands = new Commands;


    async enterSignInEmail() {
        type(emailInputLocator, "elliewilliams@lou.com");
        Misc.pause(1);
    }

    public void enterSignInPassword() {
        type(passwordInputLocator, "blablabla123123");
        Misc.pause(2);
    }

    public void clickSignInCheckbox() {
        clickIt(loginCheckboxLocator);
    }

    public void clickSignInBtn() {
        clickIt(loginBtnLocator);
        Misc.pause(2);
    }

    public boolean verifySignInErrorMessage() {
        return isElementDisplayed(signInErrorMessageLocator);
    }
}