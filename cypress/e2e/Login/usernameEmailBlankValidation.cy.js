import Login from "../../PageObjects/Login"

const login = new Login()

describe('Login functionality testing', { tags: 'Smoke' }, () => {
  it('Login functionality verification with blank email and password', () => {

    login.visitUrl();
    login.signInButton();
    login.blankFieldsValidation();
    
  })
})