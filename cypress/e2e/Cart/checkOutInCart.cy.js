import Login from "../../PageObjects/Login"
import Dashboard from "../../PageObjects/Dashbaord"
import Cart from "../../PageObjects/Cart"

const login = new Login()
const dashbaord = new Dashboard()
const cart = new Cart()

describe('Cart functionalities testing', { tags: 'Smoke' }, () => {
  it('Clicking on Checkout button in Cart should redirects user to checkout-step-one Page', () => {
    
    login.visitUrl();
    login.standardUserLoginFromFixture(Cypress.env('username'), Cypress.env('password'));
    login.signInButton();
    login.validateUrl();

    dashbaord.addToCartSauceLabsBikeLight();
    dashbaord.cartCountVerification();
    dashbaord.addToCartSauceLabsBoltTShirt()
    dashbaord.clickShoppingCart();

    cart.clickCheckout();
    cart.validateCheckout()
    
  })
})