import Login from "../../PageObjects/Login"
import Dashboard from "../../PageObjects/Dashbaord"
import Cart from "../../PageObjects/Cart"
import CheckoutStepOne from "../../PageObjects/CheckoutStepOne"
import CheckoutStepTwo from "../../PageObjects/CheckoutStepTwo"
import CheckoutComplete from "../../PageObjects/CheckoutComplete"


const login = new Login()
const dashbaord = new Dashboard()
const cart = new Cart()
const checkoutstepone = new CheckoutStepOne()
const checkoutStepTwo = new CheckoutStepTwo()
const checkoutComplete = new CheckoutComplete()

describe('Checkout Complete Page functionalities testing', { tags: 'Regression' }, () => {
  it('Clicking on Back Home button on Checkout Complete Page should redirects user to Dashboard', () => {
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
    
    checkoutstepone.typeYourInformation();
    checkoutstepone.clickContinue();
    
    checkoutStepTwo.clickFinish();
    
    checkoutComplete.clickBackHome();
    checkoutComplete.validateBackHome()
    
  })
})