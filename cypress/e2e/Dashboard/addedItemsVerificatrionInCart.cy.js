import Login from "../../PageObjects/Login"
import Dashboard from "../../PageObjects/Dashbaord"
import Cart from "../../PageObjects/Cart"

const login = new Login()
const dashbaord = new Dashboard()
const cart = new Cart()

describe('Dashbaord functionalities testing', { tags: 'Smoke' }, () => {
  it('Add & Remove product from cart functionality testing', () => {
    cy.viewport(1920,1080);
    
    login.visitUrl();
    login.standardUserLoginFromFixture();
    login.signInButton();
    login.validateUrl();

    dashbaord.addToCartSauceLabsBoltTShirt();
    dashbaord.cartCountVerification();
    dashbaord.addSauceLabsBikeLight();
    dashbaord.getSauceLabsBikeLightPrice();
    dashbaord.clickShoppingCart();

    cart.validateSauceLabsBikeLightPrice()

  })
})