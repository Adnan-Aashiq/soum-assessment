/// <reference types="cypress" />

class Dashboard {
  constructor() {
    this.toggleButton = "#react-burger-menu-btn";
    this.logout = "#logout_sidebar_link";
    this.Url = "https://www.saucedemo.com/";
    this.sortFilter = ".product_sort_container";
    this.productsName = ".inventory_item_name";
    this.productsPrice = ".inventory_item_price";
    this.addSauceLabsBoltTShirt = "#add-to-cart-sauce-labs-bolt-t-shirt";
    this.addSauceLabsBikeLight = "#add-to-cart-sauce-labs-bike-light";
    this.shoppingCartBadge = ".shopping_cart_badge";
    this.resetAppState = "#reset_sidebar_link";
    this.aboutPage = "#about_sidebar_link";
    this.Url1 = "https://saucelabs.com/";
    this.removeSauceLabsBoltTShirt = "#remove-sauce-labs-bolt-t-shirt";
    this.removeSauceLabsBikeLight = "#remove-to-cart-sauce-labs-bike-light";
    this.shoppingCart = ".shopping_cart_link";
    this.sauceLabsBoltTShirtPrice = "#remove-to-cart-sauce-labs-bolt-t-shirt";
    this.sauceLabsBikeLightPrice = "#remove-to-cart-sauce-labs-bike-light";
    this.allItems = "#inventory_sidebar_link";
    this.Url2 = "/inventory.html";
    this.Url3 = "/cart.html";
    
  }

  clickToggleButton() {
    cy.get(this.toggleButton).click();
  }

  clickAllItems(){
    cy.get(this.allItems).click()
  }

  validateAllItems(){
    cy.url().should("include", this.Url2);
  }

  clickLogout() {
    cy.get(this.logout).click();
  }

  clickResetAppState() {
    cy.get(this.resetAppState).click();
  }

  validateEmptyCart() {
    cy.get(this.shoppingCartBadge).should("not.exist");
  }

  clickAboutPage() {
    cy.get(this.aboutPage).click();
  }

  validateAboutPage() {
    cy.url().should("include", this.Url1);
  }

  goBackToDashbaordFromAboutPage() {
    cy.go("back");
  }

  validateLogout() {
    cy.url().should("include", this.Url);
  }

  applyAToZFilter(fixture = "filters") {
    cy.fixture(fixture).then((filters) => {
      cy.get(this.sortFilter).select(filters.filterTypeAtoZ);
    });
  }

  applyZToAFilter(fixture = "filters") {
    cy.fixture(fixture).then((filters) => {
      cy.get(this.sortFilter).select(filters.filterTypeZtoA);
    });
  }

  applyPriceHToLFilter(fixture = "filters") {
    cy.fixture(fixture).then((filters) => {
      cy.get(this.sortFilter).select(filters.filterTypePriceHtoL);
    });
  }

  applyPriceLToHFilter(fixture = "filters") {
    cy.fixture(fixture).then((filters) => {
      cy.get(this.sortFilter).select(filters.filterTypePriceLtoH);
    });
  }

  AToZFilterVerification() {
    this.productNameFilterVerification("asc");
  }

  ZToAFilterVerification() {
    this.productNameFilterVerification("desc");
  }

  LToHPriceFilterVerification() {
    this.priceFilterVerification("asc");
  }

  HToLPriceFilterVerification() {
    this.priceFilterVerification("desc");
  }

  productNameFilterVerification(order) {
    const arrayValues = [];
    cy.get(this.productsName)
      .each(($element) => {
        const productName = $element
          .text()
          .trim()
          .replace(/^\s+|\s+$/g, "");
        arrayValues.push(productName);
      })
      .then(() => {
        const isSorted = this.checkArrayOrder(arrayValues, order);
        expect(isSorted).to.be.true;
      });
  }

  priceFilterVerification(order) {
    const arrayValues = [];
    cy.get(this.productsPrice)
      .each(($element) => {
        const productPriceText = $element.text().trim();
        const productPrice = parseFloat(
          productPriceText.replace(/^\$|\,/g, "")
        );
        arrayValues.push(productPrice);
      })
      .then(() => {
        const isSorted = this.isNumericArraySorted(arrayValues, order);
        expect(isSorted).to.be.true;
      });
  }

  checkArrayOrder(arr, order) {
    if (order !== "asc" && order !== "desc") {
      throw new Error("Invalid order parameter. Must be 'asc' or 'desc'.");
    }
    const sortedArray = [...arr];
    if (order === "asc") {
      sortedArray.sort((a, b) => {
        const normalizedA = a.toLowerCase().replace(/[^a-z0-9 ]/g, "");
        const normalizedB = b.toLowerCase().replace(/[^a-z0-9 ]/g, "");
        return normalizedA.localeCompare(normalizedB); // Ascending order
      });
    } else {
      sortedArray.sort((a, b) => {
        const normalizedA = a.toLowerCase().replace(/[^a-z0-9 ]/g, "");
        const normalizedB = b.toLowerCase().replace(/[^a-z0-9 ]/g, "");
        return normalizedB.localeCompare(normalizedA); // Descending order
      });
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== sortedArray[i]) {
        return false;
      }
    }
    return true;
  }

  isNumericArraySorted(array, order) {
    const sortedArray =
      order === "asc"
        ? [...array].sort((a, b) => a - b)
        : [...array].sort((a, b) => b - a);

    return JSON.stringify(array) === JSON.stringify(sortedArray);
  }

  addToCartSauceLabsBoltTShirt() {
    cy.get(this.addSauceLabsBoltTShirt).click();
  }

  removeFromCartSauceLabsBoltTShirt() {
    cy.get(this.removeSauceLabsBoltTShirt).click();
  }

  cartCountVerification() {
    cy.get(this.shoppingCartBadge).should("have.text", "1");
  }

  addToCartSauceLabsBikeLight() {
    cy.get(this.addSauceLabsBikeLight).click();
  }

  removeFromCartSauceLabsBikeLight() {
    cy.get(this.removeSauceLabsBikeLight).click();
  }

  clickShoppingCart() {
    cy.get(this.shoppingCart).click();
  }

  validateShoppingCart(){
    cy.url().should("include", this.Url3);
  }

}
export default Dashboard;
