import Login from "../../PageObjects/Login"

const login = new Login()

describe('Login functionality testing', { tags: 'Smoke' }, () => {
  it('Login functionality verification with Invalid User', () => {

    login.visitUrl();
    login.invalidUserLoginFromFixture()
    login.signInButton();
    login.invalidUserValidation();
    
  })
})