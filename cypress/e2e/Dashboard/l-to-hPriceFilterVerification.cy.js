import Login from "../../PageObjects/Login"
import Dashboard from "../../PageObjects/Dashbaord"

const login = new Login()
const dashbaord = new Dashboard()

describe('Filters testing', { tags: 'Smoke' }, () => {
  it('Validating Low to High Price sort filter is wiorking fine', () => {
    cy.viewport(1920,1080);
    
    login.visitUrl();
    login.standardUserLoginFromFixture();
    login.signInButton();
    login.validateUrl();

    dashbaord.applyPriceLToHFilter();
    dashbaord.LToHPriceFilterVerification();

  })
})