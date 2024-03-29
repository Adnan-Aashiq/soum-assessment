import Login from "../../PageObjects/Login"
import Dashboard from "../../PageObjects/Dashbaord"
import Cart from "../../PageObjects/Cart"

const login = new Login()
const dashbaord = new Dashboard()
const cart = new Cart()

describe('Dashbaord functionalities testing', { tags: 'Smoke' }, () => {
  it('Add & Remove product from cart functionality testing', () => {
    
    login.visitUrl();
    login.standardUserLoginFromFixture(Cypress.env('username'), Cypress.env('password'));    ;
    login.signInButton();
    login.validateUrl();

    dashbaord.addToCartSauceLabsBikeLight();
    dashbaord.cartCountVerification();
    dashbaord.addToCartSauceLabsBoltTShirt()
    dashbaord.clickShoppingCart();

    cart.validateSauceLabsBikeLightPrice()
    cart.validateSauceLabsBoltTShirtPrice()

  })
})