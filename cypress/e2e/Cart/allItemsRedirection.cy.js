import Login from "../../PageObjects/Login"
import Dashboard from "../../PageObjects/Dashbaord"

const login = new Login()
const dashbaord = new Dashboard()

describe('CartPage functionalities testing', { tags: 'Regression' }, () => {
  it('Clicking on All Items button on Cart Page should redirects user to Dashboard', () => {
    
    login.visitUrl();
    login.standardUserLoginFromFixture(Cypress.env('username'), Cypress.env('password'));
    login.signInButton();
    login.validateUrl();

    dashbaord.addToCartSauceLabsBikeLight();
    dashbaord.cartCountVerification();
    dashbaord.addToCartSauceLabsBoltTShirt()
    dashbaord.clickShoppingCart();
    
    dashbaord.clickToggleButton();
    dashbaord.clickAllItems();
    dashbaord.validateAllItems();
    
  })
})