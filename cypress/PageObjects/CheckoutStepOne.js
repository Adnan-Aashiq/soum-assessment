/// <reference types="cypress" />

class CheckoutStepOne {
  constructor() {
    this.firstName = "#first-name";
    this.lastName = "#last-name";
    this.postelCode = "#postal-code";
    this.cancel = "#cancel";
    this.continue = "#continue";
    this.Url = "/cart.html";
    this.Url1 = "/checkout-step-two.html";
    this.errorLocator = "h3";
    this.pageTitle = ".title";
  }

  typeYourInformation(fixture = "billing") {
    cy.fixture(fixture).then((bllingInfo) => {
      cy.get(this.firstName).clear().type(bllingInfo.firstName);
      cy.get(this.lastName).clear().type(bllingInfo.lastName);
      cy.get(this.postelCode).clear().type(bllingInfo.postelCode);
    });
  }

  clickCancel() {
    cy.get(this.cancel).click();
  }

  validateCancel() {
    cy.url().should("include", this.Url);
  }

  clickContinue() {
    cy.get(this.continue).click();
  }

  validateContinue() {
    cy.url().should("include", this.Url1);
  }

  validateError() {
    cy.get(this.errorLocator).should(
      "have.text",
      "Error: First Name is required"
    );
  }

  validateCSOPageTitle(){
    cy.get(this.pageTitle).should('have.text', 'Checkout: Your Information');
  }
}
export default CheckoutStepOne;
