import Login from "../../PageObjects/Login"
import Dashboard from "../../PageObjects/Dashbaord"

const login = new Login()
const dashbaord = new Dashboard()

describe('Dashbaord functionalities testing', { tags: 'Regression' }, () => {
  it('About Page is wiorking fine', () => {
    cy.viewport(1920,1080);
    
    login.visitUrl();
    login.standardUserLoginFromFixture();
    login.signInButton();
    login.validateUrl();

    dashbaord.clickToggleButton();
    dashbaord.clickAboutPage();
    dashbaord.validateAboutPage();
    dashbaord.goBackToDashbaordFromAboutPage();

  })
})