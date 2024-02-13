/// <reference types="cypress" />

/**
 * Represents the CheckoutComplete class for handling actions and validations on the Checkout Complete page.
 */
class CheckoutComplete {
  /**
   * Constructor for the CheckoutComplete class.
   * Initializes the CSS selectors, URLs, and expected values.
   */
  constructor() {
    this.pageTitle = ".title";
    this.successMessage = "h2";
    this.backHome = "#back-to-products";
    this.Url = "/inventory.html";
    this.errorLocator = ".title";
  }

  /**
   * Validates that the page title has the expected text.
   */
  validatePageTitle() {
    cy.get(this.errorLocator).should("have.text", "Checkout: Complete!");
  }

  /**
   * Validates that the success message has the expected text.
   */
  validateSuccessMessage() {
    cy.get(this.successMessage).should(
      "have.text",
      "Thank you for your order!"
    );
  }

  /**
   * Clicks the "Back Home" button and validates the URL change.
   */
  clickBackHome() {
    cy.get(this.backHome).click();
  }

  /**
   * Validates that the URL includes the expected URL after clicking the "Back Home" button.
   */
  validateBackHome() {
    cy.url().should("include", this.Url);
  }
}

// Export the CheckoutComplete class as the default export.
export default CheckoutComplete;
