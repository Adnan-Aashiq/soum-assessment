import Login from "../../PageObjects/Login"

const login = new Login()

describe('Login functionality testing', { tags: 'Smoke' }, () => {
  it('Login functionality verification with locked User', () => {
    cy.viewport(1920,1080);

    login.visitUrl();
    login.signInButton();
    login.blankFieldsValidation();
    
  })
})