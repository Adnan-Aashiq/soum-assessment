/// <reference types="cypress" />

/**
 * Represents the CheckoutStepTwo class for handling actions and validations on the Checkout Step Two page.
 */
class CheckoutStepTwo {
  /**
   * Constructor for the CheckoutStepTwo class.
   * Initializes the CSS selectors, URLs, and error messages.
   */
  constructor() {
    this.cancel = "#cancel";
    this.finish = "#finish";
    this.Url = "/inventory.html";
    this.Url1 = "/checkout-complete.html";
    this.productCards = ".cart_item";
    this.productPrice = ".inventory_item_price";
    this.totalPrice = ".summary_subtotal_label";
    this.taxPrice = ".summary_tax_label";
    this.total = ".summary_total_label";
    this.pageTitle = ".title";
  }

  /**
   * Validates the total price of items in the cart by summing up individual item prices.
   */
  validateItemTotalPrice() {
    let totalPrice = 0;
    cy.get(this.productCards).each(($item) => {
      const priceText = $item.find(this.productPrice).text().trim();
      const itemPrice = Number(priceText.replace(/[^\d.]/g, ''));
      totalPrice += itemPrice;
    }).then(() => {
      cy.get(this.totalPrice).invoke('text').then((subtotalText) => {
        const expectedTotal = Number(subtotalText.replace(/[^\d.]/g, ''));
        expect(totalPrice).to.equal(expectedTotal);
      });
    });
  }

  /**
   * Validates the total price, tax, and overall total on the page.
   */
  validateTotal() {
    let itemTotal = 0;
    let tax = 0;

    // Extract item total
    cy.get(this.totalPrice).invoke('text').then((subtotalText) => {
      itemTotal = Number(subtotalText.replace(/[^\d.]/g, ''));
    });

    // Extract tax
    cy.get(this.taxPrice).invoke('text').then((taxText) => {
      tax = Number(taxText.replace(/[^\d.]/g, ''));
    });

    // Assert the total price with rounding to two decimal places
    cy.get(this.total).invoke('text').then((totalText) => {
      const expectedTotal = Number(totalText.replace(/[^\d.]/g, ''));
      const actualTotal = itemTotal + tax;

      // Round to two decimal places
      const roundedExpectedTotal = Math.round(expectedTotal * 100) / 100;
      const roundedActualTotal = Math.round(actualTotal * 100) / 100;

      expect(roundedActualTotal).to.equal(roundedExpectedTotal);
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
   * Clicks the "Finish" button and validates the URL change.
   */
  clickFinish() {
    cy.get(this.finish).click();
  }

  /**
   * Validates that the URL includes the expected URL after clicking the "Finish" button.
   */
  validateFinish() {
    cy.url().should("include", this.Url1);
  }

  /**
   * Validates that the page title has the expected text.
   */
  validateCSTPageTitle() {
    cy.get(this.pageTitle).should('have.text', 'Checkout: Overview');
  }
}

// Export the CheckoutStepTwo class as the default export.
export default CheckoutStepTwo;
