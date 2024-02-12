/// <reference types="cypress" />

class Cart {
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

  validateSauceLabsBikeLightPrice() {
    this.getPriceByNameCart(
      this.sauceLabsBikeLightName,
      this.sauceLabsBikeLightPrice
    );
  }

  validateSauceLabsBoltTShirtPrice() {
    this.getPriceByNameCart(
      this.sauceLabsBoltTShirtName,
      this.sauceLabsBoltTShirtPrice
    );
  }

  clickCheckout() {
    cy.get(this.checkout).click();
  }

  validateCheckout() {
    cy.url().should("include", this.Url1);
  }

  clickContinueShopping() {
    cy.get(this.continueShopping).click();
  }

  validateContinueShopping() {
    cy.url().should("include", this.Url);
  }

  validateCartPageTitle(){
    cy.get(this.pageTitle).should('have.text', 'Your Cart');
  }
}
export default Cart;
