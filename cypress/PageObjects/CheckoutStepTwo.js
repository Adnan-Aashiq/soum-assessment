/// <reference types="cypress" />

class CheckoutStepTwo {
    constructor() {
      this.cancel = "#cancel";
      this.finish = "#finish";
      this.Url = "/inventory.html";
      this.Url1 = "/checkout-complete.html";
      this.productCards = ".cart_item"
      this.productPrice = ".inventory_item_price"
      this.totalPrice = ".summary_subtotal_label"
      this.taxPrice = ".summary_tax_label";
      this.total = ".summary_total_label"
      this.pageTitle = ".title";

    }

    validateItemTotalPrice(){
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
    
  
    clickCancel() {
      cy.get(this.cancel).click();
    }
  
    validateCancel() {
      cy.url().should("include", this.Url);
    }
  
    clickFinish() {
      cy.get(this.finish).click();
    }
  
    validateFinish() {
      cy.url().should("include", this.Url1);
    }

    validateCSTPageTitle(){
      cy.get(this.pageTitle).should('have.text', 'Checkout: Overview');
    }

  }
  export default CheckoutStepTwo;
  