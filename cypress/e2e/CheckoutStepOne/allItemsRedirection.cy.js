import Login from "../../PageObjects/Login"
import Dashboard from "../../PageObjects/Dashbaord"
import Cart from "../../PageObjects/Cart"

const login = new Login()
const dashbaord = new Dashboard()
const cart = new Cart()

describe('Checkout Step One Page functionalities testing', { tags: 'Regression' }, () => {
  it('Clicking on All Items button on Checkout Step One Page should redirects user to Dashboard', () => {
    
    login.visitUrl();
    login.standardUserLoginFromFixture();
    login.signInButton();
    login.validateUrl();

    dashbaord.addToCartSauceLabsBikeLight();
    dashbaord.cartCountVerification();
    dashbaord.addToCartSauceLabsBoltTShirt()
    dashbaord.clickShoppingCart();

    cart.clickContinueShopping();
    
    dashbaord.clickToggleButton();
    dashbaord.clickAllItems();
    dashbaord.validateAllItems();
    
  })
})