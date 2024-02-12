import Login from "../../PageObjects/Login"
import Dashboard from "../../PageObjects/Dashbaord"
import Cart from "../../PageObjects/Cart"
import CheckoutStepOne from "../../PageObjects/CheckoutStepOne"

const login = new Login()
const dashbaord = new Dashboard()
const cart = new Cart()
const checkoutstepone = new CheckoutStepOne()

describe('Checkout Step One Page functionalities testing', { tags: 'Regression' }, () => {
  it('Clicking on Cancel button on Checkout Step One Page should redirects user to Cart', () => {
    cy.viewport(1920,1080);
    
    login.visitUrl();
    login.standardUserLoginFromFixture();
    login.signInButton();
    login.validateUrl();

    dashbaord.addToCartSauceLabsBikeLight();
    dashbaord.cartCountVerification();
    dashbaord.addToCartSauceLabsBoltTShirt()
    dashbaord.clickShoppingCart();

    cart.clickCheckout();
    
    checkoutstepone.clickCancel();
    checkoutstepone.validateCancel()
    
  })
})