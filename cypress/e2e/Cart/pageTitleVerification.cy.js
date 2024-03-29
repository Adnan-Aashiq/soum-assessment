import Login from "../../PageObjects/Login"
import Dashboard from "../../PageObjects/Dashbaord"
import Cart from "../../PageObjects/Cart"

const login = new Login()
const dashbaord = new Dashboard()
const cart = new Cart()

describe('Cart Page functionalities testing', { tags: 'Regression' }, () => {
  it('Verify that the Cart Page title should be (Your Cart)', () => {
    
    login.visitUrl();
    login.standardUserLoginFromFixture(Cypress.env('username'), Cypress.env('password'));
    login.signInButton();
    login.validateUrl();

    dashbaord.addToCartSauceLabsBikeLight();
    dashbaord.cartCountVerification();
    dashbaord.addToCartSauceLabsBoltTShirt()
    dashbaord.clickShoppingCart();

    cart.validateCartPageTitle()
    
  })
})