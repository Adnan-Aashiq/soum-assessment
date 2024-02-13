/// <reference types="cypress" />

/**
 * Login class for handling login functionality.
 */
class Login {
  /**
   * Initializes the Login class with necessary elements.
   */
  constructor() {
    // CSS selectors for login elements
    this.username = "#user-name";
    this.password = "#password";
    this.loginButton = "#login-button";
    this.dashboardUrl = "/inventory.html";
    this.errorLocator = "h3";
  }

  /**
   * Visits the Saucedemo website.
   */
  visitUrl() {
    cy.visit('/');
  }

  /**
   * Inputs the provided username into the username field.
   * @param {string} usernameinput - The username to be input.
   */
  inputUserName(usernameinput) {
    return cy.get(this.username).clear().type(usernameinput);
  }

  /**
   * Inputs the provided password into the password field.
   * @param {string} paramPassword - The password to be input.
   */
  inputPassword(paramPassword) {
    return cy.get(this.password).clear().type(paramPassword);
  }

  /**
   * Clicks the Sign In button.
   */
  signInButton() {
    return cy.get(this.loginButton).click();
  }

  /**
   * Validates that the current URL includes the dashboard URL.
   */
  validateUrl() {
    cy.url().should('include', this.dashboardUrl);
  }

  /**
   * Logs in with the standard user credentials from the provided in the config file.
   */
  standardUserLoginFromFixture() {
      this.inputUserName(Cypress.env('username'));
      this.inputPassword(Cypress.env('password'));
  }

  /**
   * Logs in with the locked user credentials from the provided fixture.
   * @param {string} fixture - The fixture containing user details.
   */
  lockedUserLoginFromFixture(fixture = 'users') {
    cy.fixture(fixture).then((user) => {
      this.inputUserName(user.locked_out_username);
      this.inputPassword(Cypress.env('password'));
    });
  }

  /**
   * Logs in with invalid user credentials from the provided fixture.
   * @param {string} fixture - The fixture containing user details.
   */
  invalidUserLoginFromFixture(fixture = 'users') {
    cy.fixture(fixture).then((user) => {
      this.inputUserName(user.invalid_username);
      this.inputPassword(Cypress.env('password'));
    });
  }

  /**
   * Validates the error message for a locked user.
   */
  validateLockedUserError() {
    cy.get(this.errorLocator).should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
  }

  /**
   * Validates the error message for blank fields during login.
   */
  blankFieldsValidation() {
    cy.get(this.errorLocator).should('have.text', 'Epic sadface: Username is required');
  }

  /**
   * Validates the error message for invalid user credentials.
   */
  invalidUserValidation() {
    cy.get(this.errorLocator).should('have.text', 'Epic sadface: Username and password do not match any user in this service');
  }
}

export default Login;
