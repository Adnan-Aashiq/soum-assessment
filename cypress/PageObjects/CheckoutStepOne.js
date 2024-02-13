/// <reference types="cypress" />

/**
 * Represents the CheckoutStepOne class for handling actions and validations on the Checkout Step One page.
 */
class CheckoutStepOne {
  /**
   * Constructor for the CheckoutStepOne class.
   * Initializes the CSS selectors, URLs, and error messages.
   */
  constructor() {
    this.firstName = "#first-name";
    this.lastName = "#last-name";
    this.postalCode = "#postal-code";
    this.cancel = "#cancel";
    this.continue = "#continue";
    this.Url = "/cart.html";
    this.Url1 = "/checkout-step-two.html";
    this.errorLocator = "h3";
    this.pageTitle = ".title";
  }

  /**
   * Types billing information in the corresponding input fields.
   * @param {string} fixture - The name of the fixture containing billing information.
   */
  typeYourInformation(fixture = "billing") {
    cy.fixture(fixture).then((billingInfo) => {
      cy.get(this.firstName).clear().type(billingInfo.firstName);
      cy.get(this.lastName).clear().type(billingInfo.lastName);
      cy.get(this.postalCode).clear().type(billingInfo.postelCode);
    });
  }

  /**
   * Clicks the "Cancel" button and validates the URL change.
   */
  clickCancel() {
    cy.get(this.cancel).click();
  }

  /**
   * Validates that the URL includes the expected URL after clicking the "Cancel" button.
   */
  validateCancel() {
    cy.url().should("include", this.Url);
  }

  /**
   * Clicks the "Continue" button and validates the URL change.
   */
  clickContinue() {
    cy.get(this.continue).click();
  }

  /**
   * Validates that the URL includes the expected URL after clicking the "Continue" button.
   */
  validateContinue() {
    cy.url().should("include", this.Url1);
  }

  /**
   * Validates that the error message has the expected text.
   */
  validateError() {
    cy.get(this.errorLocator).should(
      "have.text",
      "Error: First Name is required"
    );
  }

  /**
   * Validates that the page title has the expected text.
   */
  validateCSOPageTitle() {
    cy.get(this.pageTitle).should('have.text', 'Checkout: Your Information');
  }
}

// Export the CheckoutStepOne class as the default export.
export default CheckoutStepOne;
