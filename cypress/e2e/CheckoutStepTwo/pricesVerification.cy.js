import Login from "../../PageObjects/Login"
import Dashboard from "../../PageObjects/Dashbaord"
import Cart from "../../PageObjects/Cart"
import CheckoutStepOne from "../../PageObjects/CheckoutStepOne"
import CheckoutStepTwo from "../../PageObjects/CheckoutStepTwo"


const login = new Login()
const dashbaord = new Dashboard()
const cart = new Cart()
const checkoutstepone = new CheckoutStepOne()
const checkoutStepTwo = new CheckoutStepTwo()

describe('Checkout Step Two Page functionalities testing', { tags: 'Regression' }, () => {
  it('Verify Items total price should be equal to the sum of all the products added in the cart', () => {
    
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
    
    checkoutStepTwo.validateItemTotalPrice();
    checkoutStepTwo.validateTotal();
    
  })
})