/// <reference types="cypress" />

class Cart {
    constructor() {
      this.productCard = ".cart_item";
    }

    getPriceByNameCart(productName, expectedPrice){
      cy.get(this.productCard).each(($item) => {
        const name = $item.find('.inventory_item_name').text().trim();
    
        // Check if the product name matches
        if (name === productName) {
          // Get the price text and extract digits
          const actualPriceText = $item.find('.inventory_item_price').text().trim();
          const actualPrice = Number(actualPriceText.replace(/[^\d.]/g, '')); // Extract digits and convert to number
    
          // Assert with the expected price
          expect(actualPrice).to.equal(expectedPrice);
        }
      });
    }

    validateSauceLabsBikeLightPrice(){
      cy.get('@sauceLabsBikeLightPrice1').then((price) => {
        cy.assertCartItemPrice('Sauce Labs Bike Light', price);
      });
    }
    
   
  }
  export default Cart;
  