import Login from "../../PageObjects/Login"
import Dashboard from "../../PageObjects/Dashbaord"

const login = new Login()
const dashbaord = new Dashboard()

describe('Dashbaord functionalities testing', { tags: 'Smoke' }, () => {
  it('Validating Logout functionality is wiorking fine', () => {
    
    login.visitUrl();
    login.standardUserLoginFromFixture();
    login.signInButton();
    login.validateUrl();

    dashbaord.clickToggleButton();
    dashbaord.clickLogout();
    dashbaord.validateLogout();
  })
})