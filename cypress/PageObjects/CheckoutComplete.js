/// <reference types="cypress" />

class CheckoutComplete {
    constructor() {
      this.pageTitle = ".title";
      this.successMessage = "h2";
      this.backHome = "#back-to-products";
      this.Url = "/inventory.html";
      this.errorLocator = ".title";
      
    }

    validatePageTitle(){
      cy.get(this.errorLocator).should("have.text","Checkout: Complete!");
    }

    validateSuccessMessage(){
      cy.get(this.successMessage).should("have.text","Thank you for your order!");
    }

    clickBackHome(){
      cy.get(this.backHome).click();
    }
   
    validateBackHome(){
      cy.url().should("include", this.Url);
    }
  }
  export default CheckoutComplete;
  