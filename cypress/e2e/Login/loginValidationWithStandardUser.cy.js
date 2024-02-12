import Login from "../../PageObjects/Login"

const login = new Login()

describe('Login functionality testing', { tags: 'Smoke' }, () => {
  it('Login functionality verification with Standard User', () => {
    cy.viewport(1920,1080);

    login.visitUrl();
    login.standardUserLoginFromFixture();
    login.signInButton();
    login.validateUrl();
    
  })
})