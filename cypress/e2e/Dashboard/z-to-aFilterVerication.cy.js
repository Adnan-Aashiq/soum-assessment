import Login from "../../PageObjects/Login"
import Dashboard from "../../PageObjects/Dashbaord"

const login = new Login()
const dashbaord = new Dashboard()

describe('Filters testing', { tags: 'Smoke' }, () => {
  it('Validating Z to A sort filter is wiorking fine', () => {
    
    login.visitUrl();
    login.standardUserLoginFromFixture();
    login.signInButton();
    login.validateUrl();

    dashbaord.applyZToAFilter();
    dashbaord.ZToAFilterVerification();

  })
})