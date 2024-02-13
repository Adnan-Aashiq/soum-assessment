import Login from "../../PageObjects/Login"
import Dashboard from "../../PageObjects/Dashbaord"
import Cart from "../../PageObjects/Cart"
import CheckoutStepOne from "../../PageObjects/CheckoutStepOne"


const login = new Login()
const dashbaord = new Dashboard()
const cart = new Cart()
const checkoutstepone = new CheckoutStepOne()

describe('Checkout Step One Page functionalities testing', { tags: 'Regression' }, () => {
  it('Verify after leaving all the fields blank & Clicking on Continue button on Checkout Step One Page application should through an error', () => {
    
    login.visitUrl();
    login.standardUserLoginFromFixture();
    login.signInButton();
    login.validateUrl();

    dashbaord.addToCartSauceLabsBikeLight();
    dashbaord.cartCountVerification();
    dashbaord.addToCartSauceLabsBoltTShirt()
    dashbaord.clickShoppingCart();
    dashbaord.validateShoppingCart()

    cart.clickCheckout();
    
    checkoutstepone.clickContinue();
    checkoutstepone.validateError()
    
  })
})