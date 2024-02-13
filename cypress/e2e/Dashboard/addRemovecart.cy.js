import Login from "../../PageObjects/Login"
import Dashboard from "../../PageObjects/Dashbaord"

const login = new Login()
const dashbaord = new Dashboard()

describe('Dashbaord functionalities testing', { tags: 'Smoke' }, () => {
  it('Add & Remove product from cart functionality testing', () => {
    
    login.visitUrl();
    login.standardUserLoginFromFixture();
    login.signInButton();
    login.validateUrl();

    dashbaord.addToCartSauceLabsBoltTShirt();
    dashbaord.cartCountVerification();
    dashbaord.removeFromCartSauceLabsBoltTShirt();
    dashbaord.validateEmptyCart()

  })
})