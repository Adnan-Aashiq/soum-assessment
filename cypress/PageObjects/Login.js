/// <reference types="cypress" />

class Login {
  constructor() {
    this.username = "#user-name";
    this.password = "#password";
    this.loginButton = "#login-button";
    this.dashboardUrl = "/inventory.html"
    this.errorLocator = "h3"
  }

  visitUrl(){
    cy.visit('https://www.saucedemo.com/')
  }

  inputUserName(usernameinput) {
    return cy.get(this.username).clear().type(usernameinput);
  }

  inputPassword(paramPassword) {
    return cy.get(this.password).clear().type(paramPassword);
  }

  signInButton() {
    return cy.get(this.loginButton).click();
  }

  validateUrl(){
    cy.url().should('include', this.dashboardUrl);
  }

  standardUserLoginFromFixture(fixture = 'users') {
    cy.fixture(fixture).then((user) => {
      this.inputUserName(user.standard_username);
      this.inputPassword(user.password);
    });
  }

  lockedUserLoginFromFixture(fixture = 'users') {
    cy.fixture(fixture).then((user) => {
      this.inputUserName(user.locked_out_username);
      this.inputPassword(user.password);
    });
  }

  invalidUserLoginFromFixture(fixture = 'users') {
    cy.fixture(fixture).then((user) => {
      this.inputUserName(user.invalid_username);
      this.inputPassword(user.password);
    });
  }

  validateLockedUserError(){
    cy.get(this.errorLocator).should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
  }

  blankFieldsValidation(){
    cy.get(this.errorLocator).should('have.text', 'Epic sadface: Username is required');
  }

  invalidUserValidation(){
    cy.get(this.errorLocator).should('have.text', 'Epic sadface: Username and password do not match any user in this service');
  }
}
export default Login;
