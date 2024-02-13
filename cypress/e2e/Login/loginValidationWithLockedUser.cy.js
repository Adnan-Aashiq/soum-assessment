import Login from "../../PageObjects/Login"

const login = new Login()

describe('Login functionality testing', { tags: 'Smoke' }, () => {
  it('Login functionality verification with locked User', () => {

    login.visitUrl();
    login.lockedUserLoginFromFixture();
    login.signInButton();
    login.validateLockedUserError();
    
  })
})