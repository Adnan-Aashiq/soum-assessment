/// <reference types="cypress" />

/**
 * Represents the Cart class for handling cart-related actions and validations.
 */
class Cart {
  /**
   * Constructor for the Cart class.
   * Initializes the CSS selectors, URLs, and expected values.
   */
  constructor() {
    this.productCard = ".cart_item";
    this.sauceLabsBikeLightName = "Sauce Labs Bike Light";
    this.sauceLabsBikeLightPrice = 9.99;
    this.sauceLabsBoltTShirtName = "Sauce Labs Bolt T-Shirt";
    this.sauceLabsBoltTShirtPrice = 15.99;
    this.checkout = "#checkout";
    this.continueShopping = "#continue-shopping";
    this.Url = "/inventory.html";
    this.Url1 = "/checkout-step-one.html";
    this.pageTitle = ".title";
  }

  /**
   * Retrieves the price of a product from the cart and validates it against the expected price.
   * @param {string} productName - The name of the product.
   * @param {number} expectedPrice - The expected price of the product.
   */
  getPriceByNameCart(productName, expectedPrice) {
    cy.get(this.productCard).each(($item) => {
      const name = $item.find(".inventory_item_name").text().trim();
      if (name === productName) {
        const actualPriceText = $item
          .find(".inventory_item_price")
          .text()
          .trim();
        const actualPrice = Number(actualPriceText.replace(/[^\d.]/g, ""));
        expect(actualPrice).to.equal(expectedPrice);
      }
    });
  }

  /**
   * Validates the price of the Sauce Labs Bike Light product in the cart.
   */
  validateSauceLabsBikeLightPrice() {
    this.getPriceByNameCart(
      this.sauceLabsBikeLightName,
      this.sauceLabsBikeLightPrice
    );
  }

  /**
   * Validates the price of the Sauce Labs Bolt T-Shirt product in the cart.
   */
  validateSauceLabsBoltTShirtPrice() {
    this.getPriceByNameCart(
      this.sauceLabsBoltTShirtName,
      this.sauceLabsBoltTShirtPrice
    );
  }

  /**
   * Clicks the checkout button and validates the URL change.
   */
  clickCheckout() {
    cy.get(this.checkout).click();
  }

  /**
   * Validates that the URL includes the expected URL after clicking checkout.
   */
  validateCheckout() {
    cy.url().should("include", this.Url1);
  }

  /**
   * Clicks the continue shopping button and validates the URL change.
   */
  clickContinueShopping() {
    cy.get(this.continueShopping).click();
  }

  /**
   * Validates that the URL includes the expected URL after clicking continue shopping.
   */
  validateContinueShopping() {
    cy.url().should("include", this.Url);
  }

  /**
   * Validates that the cart page title has the expected text.
   */
  validateCartPageTitle() {
    cy.get(this.pageTitle).should('have.text', 'Your Cart');
  }
}

// Export the Cart class as the default export.
export default Cart;
