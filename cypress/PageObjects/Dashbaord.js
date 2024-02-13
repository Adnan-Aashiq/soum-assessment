/// <reference types="cypress" />

/**
 * Represents the Dashboard class for handling actions and validations on the Dashboard page.
 */
class Dashboard {
  /**
   * Constructor for the Dashboard class.
   * Initializes the CSS selectors, URLs, and other attributes.
   */
  constructor() {
    // Selectors
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

  /**
   * Clicks the toggle button on the Dashboard.
   */
  clickToggleButton() {
    cy.get(this.toggleButton).click();
  }

  /**
   * Clicks the "All Items" link and validates the URL.
   */
  clickAllItems() {
    cy.get(this.allItems).click();
  }

  /**
   * Validates that the URL includes the expected URL after clicking the "All Items" link.
   */
  validateAllItems() {
    cy.url().should("include", this.Url2);
  }

  /**
   * Clicks the logout button on the Dashboard.
   */
  clickLogout() {
    cy.get(this.logout).click();
  }

  /**
   * Clicks the "Reset App State" link on the Dashboard.
   */
  clickResetAppState() {
    cy.get(this.resetAppState).click();
  }

  /**
   * Validates that the shopping cart badge is not visible on the Dashboard.
   */
  validateEmptyCart() {
    cy.get(this.shoppingCartBadge).should("not.exist");
  }

  /**
   * Clicks the "About" page link on the Dashboard.
   */
  clickAboutPage() {
    cy.get(this.aboutPage).click();
  }

  /**
   * Validates that the URL includes the expected URL after clicking the "About" page link.
   */
  validateAboutPage() {
    cy.url().should("include", this.Url1);
  }

  /**
   * Navigates back to the Dashboard from the "About" page.
   */
  goBackToDashbaordFromAboutPage() {
    cy.go("back");
  }

  /**
   * Validates that the user is logged out by checking the URL.
   */
  validateLogout() {
    cy.url().should("include", this.Url);
  }

  /**
   * Applies the A to Z filter on the Dashboard.
   * @param {string} fixture - The fixture containing filter details.
   */
  applyAToZFilter(fixture = "filters") {
    cy.fixture(fixture).then((filters) => {
      cy.get(this.sortFilter).select(filters.filterTypeAtoZ);
    });
  }

  /**
   * Applies the Z to A filter on the Dashboard.
   * @param {string} fixture - The fixture containing filter details.
   */
  applyZToAFilter(fixture = "filters") {
    cy.fixture(fixture).then((filters) => {
      cy.get(this.sortFilter).select(filters.filterTypeZtoA);
    });
  }

  /**
   * Applies the Price High to Low filter on the Dashboard.
   * @param {string} fixture - The fixture containing filter details.
   */
  applyPriceHToLFilter(fixture = "filters") {
    cy.fixture(fixture).then((filters) => {
      cy.get(this.sortFilter).select(filters.filterTypePriceHtoL);
    });
  }

  /**
   * Applies the Price Low to High filter on the Dashboard.
   * @param {string} fixture - The fixture containing filter details.
   */
  applyPriceLToHFilter(fixture = "filters") {
    cy.fixture(fixture).then((filters) => {
      cy.get(this.sortFilter).select(filters.filterTypePriceLtoH);
    });
  }

  /**
   * Performs A to Z filter verification.
   */
  AToZFilterVerification() {
    this.productNameFilterVerification("asc");
  }

  /**
   * Performs Z to A filter verification.
   */
  ZToAFilterVerification() {
    this.productNameFilterVerification("desc");
  }

  /**
   * Performs Low to High price filter verification.
   */
  LToHPriceFilterVerification() {
    this.priceFilterVerification("asc");
  }

  /**
   * Performs High to Low price filter verification.
   */
  HToLPriceFilterVerification() {
    this.priceFilterVerification("desc");
  }

  /**
   * Verifies the order of product names based on the given order.
   * @param {string} order - The order, either "asc" (ascending) or "desc" (descending).
   */
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

  /**
   * Verifies the order of product prices based on the given order.
   * @param {string} order - The order, either "asc" (ascending) or "desc" (descending).
   */
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

  /**
   * Checks if an array is sorted in the specified order.
   * @param {Array} arr - The array to check for sorting.
   * @param {string} order - The order, either "asc" (ascending) or "desc" (descending).
   * @returns {boolean} - True if the array is sorted, false otherwise.
   */
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

  /**
   * Checks if a numeric array is sorted in the specified order.
   * @param {Array} array - The numeric array to check for sorting.
   * @param {string} order - The order, either "asc" (ascending) or "desc" (descending).
   * @returns {boolean} - True if the array is sorted, false otherwise.
   */
  isNumericArraySorted(array, order) {
    const sortedArray =
      order === "asc"
        ? [...array].sort((a, b) => a - b)
        : [...array].sort((a, b) => b - a);

    return JSON.stringify(array) === JSON.stringify(sortedArray);
  }

  /**
   * Adds Sauce Labs Bolt T-Shirt to the shopping cart.
   */
  addToCartSauceLabsBoltTShirt() {
    cy.get(this.addSauceLabsBoltTShirt).click();
  }

  /**
   * Removes Sauce Labs Bolt T-Shirt from the shopping cart.
   */
  removeFromCartSauceLabsBoltTShirt() {
    cy.get(this.removeSauceLabsBoltTShirt).click();
  }

  /**
   * Verifies the shopping cart count to be 1.
   */
  cartCountVerification() {
    cy.get(this.shoppingCartBadge).should("have.text", "1");
  }

  /**
   * Adds Sauce Labs Bike Light to the shopping cart.
   */
  addToCartSauceLabsBikeLight() {
    cy.get(this.addSauceLabsBikeLight).click();
  }

  /**
   * Removes Sauce Labs Bike Light from the shopping cart.
   */
  removeFromCartSauceLabsBikeLight() {
    cy.get(this.removeSauceLabsBikeLight).click();
  }

  /**
   * Clicks the shopping cart link.
   */
  clickShoppingCart() {
    cy.get(this.shoppingCart).click();
  }

  /**
   * Validates that the URL includes the expected URL after clicking the shopping cart link.
   */
  validateShoppingCart(){
    cy.url().should("include", this.Url3);
  }

}

export default Dashboard;
